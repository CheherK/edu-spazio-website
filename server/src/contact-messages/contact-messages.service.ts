import { Injectable } from '@nestjs/common';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { UpdateContactMessageDto } from './dto/update-contact-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactMessage } from './entities/contact-message.entity';
import { Repository } from 'typeorm';
import { createContactMessageParams, updateContactMessageParams } from 'utils/userType';

@Injectable()
export class ContactMessagesService {
  constructor(@InjectRepository(ContactMessage) private contactMessageRepository: Repository<ContactMessage>) {

  }
  create(createContactMessageParams: createContactMessageParams) {
    const newContactMessage = this.contactMessageRepository.create({ ...createContactMessageParams, });
    return this.contactMessageRepository.save(newContactMessage);
  }

  findAll() {
    return this.contactMessageRepository.find();

  }

  findOne(id: number) {
    return this.contactMessageRepository.findOne({ where: { id } });
  }

  update(id: number, updateContactMessageParams: updateContactMessageParams) {
    return this.contactMessageRepository.update({ id }, { ...updateContactMessageParams });
  }

  remove(id: number) {
    return this.contactMessageRepository.delete({ id });
  }
}
