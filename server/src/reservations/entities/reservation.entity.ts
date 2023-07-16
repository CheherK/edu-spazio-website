import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'reservation'})
export class Reservation {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    roomNumber:number;
    @Column()
    startTime:Date;
    @Column()
    endTime:Date;
    @Column()
    numberPersons:number;
    @Column({nullable:true})
    description:string;

    
}
