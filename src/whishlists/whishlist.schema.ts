import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Booking } from 'src/events/bookings.schema';
import { User } from 'src/users/users.schema';

export type WhishlistDocument = Whishlist & Document;

@Schema()
export class Whishlist {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_whishlist: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' })
  user_booking: Booking;

  WhishlistSchema = SchemaFactory.createForClass(Whishlist);
}
