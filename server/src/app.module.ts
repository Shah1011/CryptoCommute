import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MapModule } from './map/map.module';
import { RideModule } from './ride/ride.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://shrithanofficial:OhcESetbgeOneyXX@cryptoserver.4m1gz0g.mongodb.net/?retryWrites=true&w=majority&appName=CryptoServer'),
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    MapModule,
    RideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
