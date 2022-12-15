import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Template, TemplateDocument } from './schemas/template.schema';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import * as mongoose from 'mongoose';

@Injectable()
export class TemplateService {
    constructor(@InjectModel(Template.name) private templateModel: Model<TemplateDocument>) {}

    async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
        const createdTemplate = new this.templateModel(createTemplateDto);
        return createdTemplate.save();
    }

    async update(templateID: string, updateTemplateDto: UpdateTemplateDto): Promise<Template> {
        const updatedTemplate = this.templateModel.findByIdAndUpdate(templateID, updateTemplateDto);
        return updatedTemplate;
    }

    async findOne(id:string): Promise<Template> {
        return await this.templateModel.findOne({_id: new mongoose.Types.ObjectId(id)});
    }  

    async findAll(): Promise<any[]> {
        console.log("template.service: findAll()");
        const docs = await this.templateModel.find().exec();
        return docs.map(doc=>({name: doc.name, id: doc._id})).sort();
    }  
}
