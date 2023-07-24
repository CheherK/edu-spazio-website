import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationsService {
  constructor(@InjectRepository(Reservation) private reservationRepository: Repository<Reservation>) {}
  create(createReservationDto: CreateReservationDto) {
    const newReservation=this.reservationRepository.create({...createReservationDto})
    return this.reservationRepository.save(newReservation);  }

  findAll() {
    return this.reservationRepository.find();
  }

  findOne(id: number) {
    return this.reservationRepository.findOne({where:{id}});
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.update({id},{...updateReservationDto});
  }

  remove(id: number) {
    return this.reservationRepository.delete({id});
  }
}
