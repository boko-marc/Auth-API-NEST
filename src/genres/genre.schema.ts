import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {
  @Prop()
  name: string;
  GenreSchema = SchemaFactory.createForClass(Genre);
}
