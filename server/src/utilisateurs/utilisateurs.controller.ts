import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';

@Controller('utilisateurs')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Post()
  create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    this.utilisateursService.create(createUtilisateurDto);
  }

  @Get()
   async findAll() {
    const users=await this.utilisateursService.findAll();
    return users
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.utilisateursService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.utilisateursService.update(+id, updateUtilisateurDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.utilisateursService.remove(+id);
  }
}
