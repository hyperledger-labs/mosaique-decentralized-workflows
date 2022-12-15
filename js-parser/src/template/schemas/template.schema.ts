import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TemplateDocument = mongoose.HydratedDocument<Template>;

@Schema()
export class Template {
  @Prop()
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  created: Date;

  @Prop()
  startingMachine: string;

  @Prop()
  roles: [{roleId: string, roleName: String}];

  @Prop()
  machines: [{
    machineId: string,
    displayName: String,
    startingState: string,
    states: [{
        stateId: string,
        stateName: String,
        roles: [{
            roleId: string,
            displayData: [{
                displayType: String,
                displayContent: String,
                displayAction: string
            }],
            actions: [{
                actionId: string,
                actionName: String,
                transitionID: string                
            }]
        }],
        transitions: [{
            transitionId: string,
            transitionName: String,
            conditions: [{
                conditionName: String,
                condition: String,
                newState: string
            }]
        }]
    }]
  }]

}

export const TemplateSchema = SchemaFactory.createForClass(Template);