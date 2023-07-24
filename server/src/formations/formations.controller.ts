import { Controller, Get, Post, Body, Put, Param, Delete ,ParseIntPipe} from '@nestjs/common';
import { FormationsService } from './formations.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';

@Controller('formations')
export class FormationsController {
  constructor(private readonly formationsService: FormationsService) {}

  @Post()
  create(@Body() createFormationDto: CreateFormationDto) {
    return this.formationsService.create(createFormationDto);
  }

  @Get()
  findAll() {
    return this.formationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.formationsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateFormationDto: UpdateFormationDto) {
    return this.formationsService.update(+id, updateFormationDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.formationsService.remove(+id);
  }
}
