import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    firstName:string;
    @Column()
    lastName:string;
    @Column({nullable:true})
    birthDay :Date;
    @Column({nullable:true})
    url:string;
    @Column()
    level :string;
    @Column()
    tel:number;
    @Column()
    email:string;
    @Column()
    password:string;
    @Column({default:false})
    admin:boolean;
    @Column({default:false})
    paid:boolean;
}
