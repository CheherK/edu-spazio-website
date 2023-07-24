import { PartialType } from '@nestjs/mapped-types';
import { CreateContactMessageDto } from './create-contact-message.dto';

export class UpdateContactMessageDto extends PartialType(CreateContactMessageDto) {
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    tel :number
    message:string;
}
