import { Controller, Get, Post, Body, Put, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Reservation } from './entities/reservation.entity';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}
  @Post()
  @ApiCreatedResponse({
    description:'created reservation ',
    type:Reservation,
  })
  @ApiBadRequestResponse({
    description:'reservation cannot register'
  })
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get()
  @ApiOkResponse({
    description:'reservations loaded',
    type:[Reservation]
  })
  @ApiBadRequestResponse({
    description:' cannot get reservations'
  })
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description:'reservation loaded',
    type:Reservation
  })
  @ApiBadRequestResponse({
    description:' cannot get reservation'
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.reservationsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({
    status:204,
    description:'reservation updated',
  })
  @ApiBadRequestResponse({
    description:' cannot update reservation'
  })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description:'reservation deleted',
  })
  @ApiBadRequestResponse({
    description:' cannot delete reservation'
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.reservationsService.remove(+id);
  }
}
