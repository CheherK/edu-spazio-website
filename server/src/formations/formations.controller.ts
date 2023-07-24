import { Controller, Get, Post, Body, Put, Param, Delete ,ParseIntPipe} from '@nestjs/common';
import { Controller, Get, Post, Body, Put, Param, Delete ,ParseIntPipe} from '@nestjs/common';
import { FormationsService } from './formations.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Formation } from './entities/formation.entity';

@ApiTags('formations')
@Controller('formations')
export class FormationsController {
  constructor(private readonly formationsService: FormationsService) {}

  @Post()
  @ApiCreatedResponse({
    description:'created training session',
    type:Formation,
  })
  @ApiBadRequestResponse({
    description:'training session cannot register'
  })
  create(@Body() createFormationDto: CreateFormationDto) {
    return this.formationsService.create(createFormationDto);
  }

  @Get()
  @ApiOkResponse({
    description:'training sessions loaded',
    type:[Formation]
  })
  @ApiBadRequestResponse({
    description:' cannot get training sessions'
  })
  findAll() {
    return this.formationsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description:'training session loaded',
    type:Formation,
  })
  @ApiBadRequestResponse({
    description:' cannot get training session'
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.formationsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({
    status:204,
    description:'training session updated',
  })
  @ApiBadRequestResponse({
    description:' cannot update training session'
  })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateFormationDto: UpdateFormationDto) {
    return this.formationsService.update(+id, updateFormationDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description:'training session deleted',
  })
  @ApiBadRequestResponse({
    description:' cannot delete training session'
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.formationsService.remove(+id);
  }
}
