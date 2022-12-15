import { Module } from '@nestjs/common';
import { ParseController } from './parse.controller';
import { ParseService } from './parse.service';
import { TemplateModule } from '../template/template.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Instance, InstanceSchema } from './schemas/instance.schema';

@Module({
  imports: [TemplateModule, MongooseModule.forFeature([{ name: Instance.name, schema: InstanceSchema }])],
  controllers: [ParseController],
  providers: [ParseService]
})
export class ParseModule {}
