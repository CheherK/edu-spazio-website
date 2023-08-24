import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
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
