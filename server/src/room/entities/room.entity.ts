import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'rooms' })
export class Room {
    @ApiProperty({ description: 'primary key for room', example: 1 })
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty({
        description:'type of room',
        example:'1C'
    })
    @Column()
    type:string
    @ApiProperty({
        description:'url of a photo',
        example:'www.fdsfds.com'
    })
    @Column()
    url:string;

}
