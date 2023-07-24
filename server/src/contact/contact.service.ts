import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactService {
  constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) {}
  create(createContactDto: CreateContactDto) {
    const newContact=this.contactRepository.create({...createContactDto})
    return this.contactRepository.save(newContact);  
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    return this.contactRepository.findOne({where:{id}});
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return this.contactRepository.update({id},{...updateContactDto});
  }

  remove(id: number) {
    return this.contactRepository.delete({id});
  }
}
