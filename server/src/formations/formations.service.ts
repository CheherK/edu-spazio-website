import { Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Formation } from './entities/formation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Formation } from './entities/formation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormationsService {
  constructor(@InjectRepository(Formation) private formationRepository: Repository<Formation>) {}

  create(createFormationDto: CreateFormationDto) {
    const newFormation=this.formationRepository.create({...createFormationDto})
    return this.formationRepository.save(newFormation);
    const newFormation=this.formationRepository.create({...createFormationDto})
    return this.formationRepository.save(newFormation);
  }

  findAll() {
    return this.formationRepository.find();
    return this.formationRepository.find();
  }

  findOne(id: number) {
    return this.formationRepository.findOne({where:{id}}) ;
    return this.formationRepository.findOne({where:{id}}) ;
  }

  update(id: number, updateFormationDto: UpdateFormationDto) {
    return this.formationRepository.update({id},{...updateFormationDto});
    return this.formationRepository.update({id},{...updateFormationDto});
  }

  remove(id: number) {
    return this.formationRepository.delete({id});
    return this.formationRepository.delete({id});
  }
}
