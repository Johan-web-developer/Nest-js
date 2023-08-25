import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Astronauta, AstronautaSchema } from './astronautas.schema';
import { AstronautasService } from './astronautas.service';
import { AstronautasController } from './astronautas.controller';
import { AppService } from 'src/app.service';
@Module({
    imports:[
        MongooseModule.forFeature([{
            name: Astronauta.name,
            schema: AstronautaSchema    
        }])
    ],
    providers: [AstronautasService, AppService],
    controllers:[AstronautasController]

})
export class AstronautasModule {}
 