import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { FormationsModule } from './formations/formations.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateurs/entities/utilisateur.entity';
import { Reservation } from './reservations/entities/reservation.entity';
import { Formation } from './formations/entities/formation.entity';
import { ContactModule } from './contact/contact.module';
import { Contact } from './contact/entities/contact.entity';

@Module({
  imports: [UtilisateursModule, FormationsModule, ReservationsModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'p3uh36CBgYfjYV8ck2PK',
    database:'edu_spazio_mysql',
    entities:[Utilisateur,Reservation,Formation,Contact],
    synchronize:true,
  }),
  ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
