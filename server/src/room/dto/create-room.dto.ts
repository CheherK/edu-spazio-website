import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    id:number;
    @ApiProperty({
        description:'type of a room',
        example:'1C'
    })
    type:string;
    @ApiProperty({
        description:'url of a photo',
        example:'www.fsdfdsf.com'
    })
    url:string;


}
