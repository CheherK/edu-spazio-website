import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'formation'})
export class Formation {
    @ApiProperty({ description: 'Primary key as training session ID', example: 1 })
    @PrimaryGeneratedColumn()
    id:number;
    @ApiProperty({
        description: 'subject name',
        example: 'python'
    })
    @Column()
    subject:string;
    @ApiProperty({
        description: 'time of training session',
        example: '8 march 2023 14h'
    })
    @Column()
    time:string;
    @ApiProperty({
        description: 'duration of the training session',
        example: '4h'
    })
    @Column()
    duration:number;
    @ApiProperty({
        description: 'class that will do the training session',
        example: '1 ére année prepa'
    })
    @Column()
    class:string;

}
