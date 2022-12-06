import { Controller, Get, Post, Body, Param, Put, Res, HttpStatus } from '@nestjs/common';
import { ParseService } from  './parse.service';
import { InitialInstanceDto } from './dto/initial-instance.dto';
import { UseInstanceDto } from './dto/use-instance.dto';


@Controller('parse')
export class ParseController {
    constructor(private parseService: ParseService) {}

    @Post('/create')
    async initialInstance(@Res() response, @Body() initialInstanceDto: InitialInstanceDto): Promise<String> {
        console.log("^^^^^ parse.controller: initialInstance()");
        try {
            const display=await this.parseService.create(initialInstanceDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Instance has been created successfully',
                display,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Post('/use')
    async useInstance(@Res() response, @Body() useInstanceDto: UseInstanceDto): Promise<String> {
        console.log("^^^^^ parse.controller: useInstance()");
        try {
            const display=await this.parseService.use(useInstanceDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Instance has been processed successfully',
                display,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get()
    async allInstances(): Promise<any[]> {
        console.log("^^^^^ parse.controller: allInstances()");
        return await this.parseService.findAllInstance();
    }

}
