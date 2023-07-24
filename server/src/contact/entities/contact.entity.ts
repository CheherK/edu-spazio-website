import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'contacts'})
export class Contact {
    @ApiProperty({ description: 'Primary key as contact ID', example: 1 })
    @PrimaryGeneratedColumn()
    id:number;
    @ApiProperty({
        description: 'First name of sender',
        example: 'Oussema'
    })
    @Column()
    firstName: string;
    @ApiProperty({
        description: 'Last name of sender',
        example: 'Ben hriz'
    })
    @Column()
    lastName: string;
    @ApiProperty({ description: 'Email of sender', example: 'obenhriz@gmailcom' })
    @Column()
    email: string;
    @ApiProperty({ description: 'tel number of sender', example: 44230772 })
    @Column()
    tel: number;
    @ApiProperty({ description: 'the content of message', example: 'hey there' })
    @Column()
    message: string;
}
