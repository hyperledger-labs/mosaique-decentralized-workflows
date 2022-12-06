import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Instance, InstanceDocument } from './schemas/instance.schema';
import { InitialInstanceDto } from './dto/initial-instance.dto';
import { UseInstanceDto } from './dto/use-instance.dto';
import * as mongoose from 'mongoose';
import { TemplateService } from 'src/template/template.service';
import { Template, TemplateDocument } from 'src/template/schemas/template.schema';

@Injectable()
export class ParseService {
    constructor(@InjectModel(Instance.name) private instanceModel: Model<InstanceDocument>) {}
    @Inject(TemplateService)
    private readonly templateService: TemplateService;

    async create(initialInstanceDto: InitialInstanceDto): Promise<any> {
        console.log("**** parse.service: create()");
        const createdInstance = new this.instanceModel({
            name: initialInstanceDto.name,
            templateId: initialInstanceDto.templateId,
            currentState: "100",
            created: Date(),
            data: "{}"
        });
        const useTemplate=await this.templateService.findOne(initialInstanceDto.templateId);
        //console.log("template to use=", useTemplate);
        const displayObjects=this.getInitialDisplay(useTemplate, initialInstanceDto.roleId);
        createdInstance.save();
        let instance = {
            instanceId: createdInstance._id,
            displayData: displayObjects
        }
        console.log("Instance = ", displayObjects);
        return instance;
    }

    async use(useInstanceDto: UseInstanceDto): Promise<any> {
        console.log("**** parse.service: use()");
        // Get the instance from passed in instanceId
        const useInstance=await this.findInstance(useInstanceDto.instanceId);
        // From the instance templateId get the template
        const useTemplate=await this.templateService.findOne(useInstance.templateId);
        // Get the role from the logged in user
        const useRole=useInstanceDto.roleId;  // use admin until user added
        // unless the tranistion condition is met, we stay on the current state
        let state = useInstance.currentState;
        // From the the template/role/state get the action's transition
        const action = this.getAction(useTemplate, useRole, useInstance.currentState, useInstanceDto.actionId);
        // if there is an action, get thee transition and check the condition
        if(action) {
            console.log("reached here");
            // From the action get the transition
            const transition = this.getTransition(useTemplate, useRole, useInstance.currentState, action?.transitionId);
            // Check the transition condition to see if state changes
            const check = this.processCondition(transition.conditions);
            if(check.pass==true) {
                // Move to the new state
                console.log("Previous state = ", state)
                state = check.newState;
                console.log("New state = ", state)
                // Write the new state to the instance document
                this.updateInstance(useInstanceDto.instanceId, {currentState: state});
            }
        }
        // Get the display for the state to return
        const displayObjects=this.getCurrentDisplay(useTemplate, useRole, state);
        console.log("Instance = ", displayObjects);
        const instance = {
            instanceId: useInstanceDto.instanceId,
            displayData: displayObjects
        }
        return instance;
    }

    async findAllInstance(): Promise<any[]> {
        console.log("**** parse.service: findAllInstance()");
        const docs = await this.instanceModel.find().exec();
        return docs.map(doc=>({name: doc.name, id: doc._id, state: doc.currentState})).sort();
    }  

    async findInstance(instanceId: string): Promise<any> {
        console.log("**** parse.service: findInstance()");
        const instance = await this.instanceModel.findOne({_id: new mongoose.Types.ObjectId(instanceId)}).exec();
        return instance;
    }  

    async updateInstance(instanceId: string, newData: any) {
        console.log("**** parse.service: updateInstance()");
        this.instanceModel.findByIdAndUpdate(instanceId, newData, function(err, model) {
            if (err) {
                console.log('item:failure', 'Failed to edit ' + newData);
                return;
            }
        });
    }

    getInitialDisplay(template: Template, roleId: string): any {
        console.log("=== parse.service: getInitialDisplay()");
        const startingMachine = template.startingMachine;
        const machine = this.getMachine(template, startingMachine);
        const currentState = machine.startingState;
        console.log("Parse roleId=", roleId, "state=", currentState );
        return this.getCurrentDisplay(template, roleId, currentState);
    }

    getCurrentDisplay(template: any, roleId: string, currentState: string): any {
        console.log("=== parse.service: getCurrentDisplay()");
        const startingMachine = template.startingMachine;
        const machine = this.getMachine(template, startingMachine);
        const stateInfo = this.getState(machine, currentState);
        const stateRole = this.getRole(stateInfo, roleId);
        return stateRole.displayData;
    }

    getMachine(template: Template, machineId: string): any {
        console.log("=== parse.service: getMachine()");
        const machineArray = template.machines;
        return machineArray.find(machine => machine?.machineId === machineId);
    }

    getState(machine: any, currentState: string): any {
        console.log("=== parse.service: getState()");
        const statesArray = machine.states;
        return statesArray.find(state => state?.stateId === currentState);
    }

    getRole(state: any, currentRole: string): any {
        console.log("=== parse.service: getRole()");
        const rolesArray = state.roles;
        return rolesArray.find(role => role?.roleId === currentRole);
    }

    getAction(template: Template, currentRole: string, currentState: string, actionId: string): any {
        console.log("=== parse.service: getAction()");
        const startingMachine = template.startingMachine;
        const machine = this.getMachine(template, startingMachine);
        const stateInfo = this.getState(machine, currentState);
        const stateRole = this.getRole(stateInfo, currentRole);
        const actionsArray = stateRole?.actions;
        return actionsArray.find(action => action?.actionId === actionId);
    }

    getTransition(template: Template, currentRole: string, currentState: string, transitionId: string): any {
        console.log("=== parse.service: getTransition()");
        const startingMachine = template.startingMachine;
        const machine = this.getMachine(template, startingMachine);
        const stateInfo = this.getState(machine, currentState);
        const transitionsArray = stateInfo?.transitions;
        return transitionsArray.find(transition => transition?.transitionId === transitionId);
    }

    processCondition(conditions: any): any {
        console.log("=== parse.service: processCondition()");
        // placeholder until more sophisticated conditions supported
        let check = {
            pass: false,
            newState: "0"
        }
        for(const condition of conditions) {
            if(condition.condition==="true") {
                check.pass=true;
                check.newState=condition.newState;
                return check;
            }
        }
        return check;
    }
}
