import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { ContactMessagesModule } from './contact-messages/contact-messages.module';
import { FormationsModule } from './formations/formations.module';
import { ReservationsModule } from './reservations/reservations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateurs/entities/utilisateur.entity';
import { ContactMessage } from './contact-messages/entities/contact-message.entity';
import { Reservation } from './reservations/entities/reservation.entity';
import { Formation } from './formations/entities/formation.entity';

@Module({
  imports: [UtilisateursModule, ContactMessagesModule, FormationsModule, ReservationsModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'p3uh36CBgYfjYV8ck2PK',
    database:'edu_spazio_mysql',
    entities:[Utilisateur,Reservation,Formation],
    synchronize:true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
