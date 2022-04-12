import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Genre } from '../genres/genre.schema';
import { Url } from 'url';
import * as mongoose from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  // titre
  @Prop({ required: true })
  title: string;
  // image
  @Prop({ required: true })
  image: Url;
  // description
  @Prop({ required: true })
  description: string;
  // prix
  @Prop({ required: true })
  price: number;
  // jour du concert
  @Prop({ required: true })
  date_of_concert: Date;
  // tickets_available
  @Prop({ required: true })
  tickets_a_vendre: number;
  // tickets_vendu
  @Prop()
  tickets_vendu: number;
  //   codeQR
  @Prop()
  codeqr: string;
  //   genre,ref
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' })
  genre: Genre;
  // lieu
  @Prop({ required: true })
  lieu: string;
  //   heure
  @Prop({ required: true })
  heure: string;

  BookingSchema = SchemaFactory.createForClass(Booking);
}
