import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'reservation'})
export class Reservation {
    @ApiProperty({ description: 'Primary key as Reservation ID', example: 1 })
    @PrimaryGeneratedColumn()
    id:number;
    @ApiProperty({description: 'room number of the reservation s room',example: '1'})
    @Column()
    roomNumber:number;
    @ApiProperty({description: 'time of start ',example: '2023-07-23T09:30:00.000Z'})
    @Column({type:'datetime'})
    startTime:Date;
    @ApiProperty({description: 'time of end',example: '2023-07-23T10:30:00.000Z'})
    @Column({type:'datetime'})
    endTime:Date;
    @ApiProperty({description: 'number of persons that will attend',example: 4})
    @Column()
    numberPersons:number;
    @ApiProperty({description: 'description for the reservation ',example: 'we would like to a tv screen in the room '})
    @Column({nullable:true})
    description:string;
}
