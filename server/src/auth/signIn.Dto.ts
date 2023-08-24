import { ApiProperty } from "@nestjs/swagger";

export class signInDto {

    @ApiProperty({
        description: 'username of the user',
        example: 'Oussamabh'
    })
    username: string;
    @ApiProperty({
        description: 'password of the user',
        example: 'Oussama'
    })
    password:string;
  
}