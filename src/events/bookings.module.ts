import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './events.controller';

@Module({
  controllers: [BookingsController],
  providers: [BookingsService]
})
export class BookingsModule {}
