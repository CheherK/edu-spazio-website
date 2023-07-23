import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { createUtilisateurParams, updateUtilisateurParams } from 'utils/userType';

@Injectable()
export class UtilisateursService {
  constructor(@InjectRepository(Utilisateur) private utilisateurRepository: Repository<Utilisateur>) {

  }
  create(createUtilisateurParams: createUtilisateurParams) {
    const parsedBirthDay = new Date(createUtilisateurParams.birthDay); // Parse birthDay to a Date object
    const newUser = this.utilisateurRepository.create({
      birthDay: parsedBirthDay,
      ...createUtilisateurParams,
    });
    return this.utilisateurRepository.save(newUser);
  }

  findAll() {
    return this.utilisateurRepository.find();

  }

   findOne(id: number) {
    return this.utilisateurRepository.findOne({ where: { id } });
  }
  update(id: number, UpdateUtilisateurParams: updateUtilisateurParams) {
    return this.utilisateurRepository.update({ id }, { ...UpdateUtilisateurParams });
  }

  remove(id: number) {
    return this.utilisateurRepository.delete({ id });
  }
}
