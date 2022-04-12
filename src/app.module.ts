import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './events/bookings.module';
import { GenresModule } from './genres/genres.module';
import { WhishlistsModule } from './whishlists/whishlists.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule,
    BookingsModule,
    GenresModule,
    WhishlistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
