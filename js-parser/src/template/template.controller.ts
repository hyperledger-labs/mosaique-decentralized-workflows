import { Controller, Get, Post, Body, Param, Put, Res, HttpStatus } from '@nestjs/common';
import { TemplateService } from  './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { Template, TemplateDocument } from './schemas/template.schema';


@Controller('template')
export class TemplateController {
    constructor(private templateService: TemplateService) {}

    @Get()
    async allTemplates(): Promise<any[]> {
        console.log("template.controller: allTemplates()");
        return await this.templateService.findAll();
    }

    @Post('/create')
    async createTemplate(@Res() response, @Body() createTemplateDto: CreateTemplateDto): Promise<String> {
        console.log("template.controller: createTemplate()");
        try {
            await this.templateService.create(createTemplateDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Template has been created successfully',
                createTemplateDto,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getTemplate(@Res() response, @Param('id') id:string) {
        console.log("template.controller: getTemplate()");
        try {
            const template = await this.templateService.findOne(id);
            console.log("Found", template);
            response.status(200).send(template);
        } catch (err) {
            console.log("findOne")
            response.status(err.status).json(err.response); 
        }
    }

    @Put('/:id')
    async updateTemplate(@Res() response, @Param('id') templateId: string, @Body() updateTemplateDto: UpdateTemplateDto) {
        console.log("template.controller: updateTemplate()");
        try {
            await this.templateService.update(templateId, updateTemplateDto);
            response.status(HttpStatus.OK).json({
                message: 'Template has been successfully updated',
                updateTemplateDto,});
        } catch (err) {
            response.status(err.status).json(err.response);
        }
    }
}
