import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParseModule } from './parse/parse.module';
import { TemplateModule } from './template/template.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ParseModule, TemplateModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_CONNECTIONSTRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
