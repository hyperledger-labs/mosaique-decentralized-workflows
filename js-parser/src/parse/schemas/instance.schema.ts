import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type InstanceDocument = mongoose.HydratedDocument<Instance>;

@Schema()
export class Instance {

  @Prop()
  name: string;

  @Prop()
  created: Date;

  @Prop()
  templateId: string;

  @Prop()
  currentState: string;

  @Prop()
  data: String;

}

export const InstanceSchema = SchemaFactory.createForClass(Instance);