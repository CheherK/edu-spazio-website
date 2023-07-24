export type createUtilisateurParams={
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
export type updateUtilisateurParams={
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
export type createContactMessageParams={
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    tel :number
    message:string;
}
export type updateContactMessageParams={
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    tel :number
    message:string;
}