import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'formation'})
export class Formation {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    subject:string;
    @Column()
    time:Date;
    @Column()
    duration:number;
    @Column()
    class:string;

}
