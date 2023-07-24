import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
    id:number;
    @ApiProperty({
        description: 'room number of the reservation s room',
        example: 'c1'
    })
    roomNumber:number;
    @ApiProperty({
        description: 'time of start ',
        example: '2023-07-23T09:30:00.000Z'
    })
    startTime:Date;
    @ApiProperty({
        description: 'time of end',
        example: '2023-07-23T10:30:00.000Z'
    })
    endTime:Date;
    @ApiProperty({
        description: 'number of persons that will attend',
        example: 4
    })
    numberPersons:number;
    @ApiProperty({
        description: 'description for the reservation ',
        example: 'we would like to a tv screen in the room '
    })
    description:string;

}
