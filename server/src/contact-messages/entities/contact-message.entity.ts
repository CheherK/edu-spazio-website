import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"contactMessages"})
export class ContactMessage {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    firstName:string;
    @Column()
    lastName:string;
    @Column()
    email:string;
    @Column()
    message:string;
}
