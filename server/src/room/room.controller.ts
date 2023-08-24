import { Controller, Get, Post, Body, Put, Param, Delete,ParseIntPipe,UseGuards } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Room } from './entities/room.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@ApiTags('rooms')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  @Roles(Role.Admin)  
  @ApiCreatedResponse({
    description:'created room ',
    type:Room,
  })
  @ApiBadRequestResponse({
    description:'room cannot register'
  })
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get()
  @ApiOkResponse({
    description:'rooms loaded',
    type:[Room]
  })
  @ApiBadRequestResponse({
    description:' cannot get rooms'
  })
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':type')
  @ApiOkResponse({
    description:'rooms loaded',
    type:[Room]
  })
  @ApiBadRequestResponse({
    description:' cannot get rooms'
  })
  findOne(@Param('type') id: string) {
    return this.roomService.findOne(id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Put(':id')
  @Roles(Role.Admin) 
  @ApiResponse({
    status:204,
    description:'room updated',
  })
  @ApiBadRequestResponse({
    description:' cannot update room'
  })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }
  @UseGuards(AuthGuard, RolesGuard)
  @Delete(':id')
  @Roles(Role.Admin) 
  @ApiOkResponse({
    description:'room deleted',
  })
  @ApiBadRequestResponse({
    description:' cannot delete room'
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.roomService.remove(+id);
  }
}
