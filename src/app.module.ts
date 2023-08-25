import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProyectModule } from './proyect/proyect.module';
import { AstronautasModule } from './astronautas/schemas/astronautas.module';


@Module({
  
  imports: [ProyectModule, MongooseModule.forRoot('mongodb+srv://Shadow:12345@cluster0.nwtehno.mongodb.net/astronautasDB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
