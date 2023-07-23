import { PartialType } from '@nestjs/mapped-types';
import { CreateFormationDto } from './create-formation.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFormationDto extends PartialType(CreateFormationDto) {
    id:number;
    @ApiProperty({
        description: 'subject name',
        example: 'python'
    })
    subject:string;
    @ApiProperty({
        description: 'time of training session',
        example: '8 march 2023 14h'
    })
    time:string;
    @ApiProperty({
        description: 'duration of the training session',
        example: '4h'
    })
    duration:number;
    @ApiProperty({
        description: 'class that will do the training session',
        example: '1 ére année prepa'
    })
    class:string;

}
