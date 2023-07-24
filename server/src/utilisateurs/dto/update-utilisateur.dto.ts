import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateur.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {
    id: number;
    @ApiProperty({
        description: 'the first name of the user',
        example: 'Oussama'
    })
    firstName: string;
    @ApiProperty({
        description: 'the last name of the user',
        example: 'ben hriz'
    })
    lastName: string;
    @ApiProperty({
        description: 'the birth day of the user',
        example: 'march 08,2000'
    })

    birthDay: Date;
    @ApiProperty({
        description: 'the url  for image of the user',
        example: 'Oussama'
    })
    url: string;
    @ApiProperty({
        description: 'the level  of the user',
        example: '1 ére année prepa'
    })
    level: string;
    @ApiProperty({
        description: 'the telephone number of the user',
        example: 44230772
    })

    tel: number;
    @ApiProperty({
        description: 'the email  of the user',
        example: 'obenhriz@gmail.com'
    })
    email: string;
    @ApiProperty({
        description: 'the password  of the user',
        example: '1234'
    })
    password: string;
    @ApiProperty({
        description: 'is the user an admin or not?',
        example: false
    })
    admin: boolean;
    @ApiProperty({
        description: 'is the user paid or not ?',
        example: true
    })
    paid: boolean;
}
