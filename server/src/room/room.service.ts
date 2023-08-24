import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(@InjectRepository(Room) private RoomRepository: Repository<Room>) { }
  create(createRoomDto: CreateRoomDto) {
    const newRoom = this.RoomRepository.create({ ...createRoomDto })
    return this.RoomRepository.save(newRoom);
  }

  findAll() {
    return this.RoomRepository.find();
  }

  findOne(type: string) {
    return this.RoomRepository.find({where:{type}});
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.RoomRepository.update({id},{...updateRoomDto});
  }

  remove(id: number) {
    return this.RoomRepository.delete({id});
  }
}
