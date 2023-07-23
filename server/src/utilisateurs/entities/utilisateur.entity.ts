import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class Utilisateur {
    @ApiProperty({ description: 'Primary key as User ID', example: 1 })
    @PrimaryGeneratedColumn()
    id:number;
    @ApiProperty({ description: 'first name', example: 'oussema ' })
    @Column()
    firstName:string;
    @ApiProperty({ description: 'last name', example: 'ben hriz' })
    @Column()
    lastName:string;
    @ApiProperty({ description: 'birth day', example: 'March 08,2000' })
    @Column({nullable:true})
    birthDay :Date;
    @ApiProperty({ description: 'url for photo', example: 'www......' })
    @Column({nullable:true})
    url:string;
    @ApiProperty({ description: 'User level', example: '1 ére année prepa' })
    @Column()
    level :string;
    @ApiProperty({ description: 'User tel', example: 44230772 })
    @Column()
    tel:number;
    @ApiProperty({ description: 'User email', example: 'obenhriz@gmail.com' })
    @Column()
    email:string;
    @ApiProperty({ description: 'User password', example: '1234' })
    @Column()
    password:string;
    @ApiProperty({ description: 'is user admin', example: false })
    @Column({default:false})
    admin:boolean;
    @ApiProperty({ description: 'is user paid', example: true })
    @Column({default:false})
    paid:boolean;
}
