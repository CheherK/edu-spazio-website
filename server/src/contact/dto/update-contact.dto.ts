import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    id:number;
    @ApiProperty({
        description: 'First name of sender',
        example: 'Oussema'
    })
    firstName: string;
    @ApiProperty({
        description: 'Last name of sender',
        example: 'Ben hriz'
    })
    lastName: string;
    @ApiProperty({ description: 'Email of sender', example: 'obenhriz@gmailcom' })
    email: string;
    @ApiProperty({ description: 'tel number of sender', example: 44230772 })
    tel: number;
    @ApiProperty({ description: 'the content of message', example: 'hey there' })
    message: string;
}
