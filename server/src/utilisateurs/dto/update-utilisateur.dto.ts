import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateur.dto';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {
    id:number;
    firstName:string;
    lastName:string;
    birthDay :Date;
    url:string;
    level :string;
    tel:number;
    email:string;
    password:string;
    admin:boolean;
    paid:boolean;
}
