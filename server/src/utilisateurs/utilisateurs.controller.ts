import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Utilisateur } from './entities/utilisateur.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Utilisateur } from './entities/utilisateur.entity';

@ApiTags('utilisateurs')
@ApiTags('utilisateurs')
@Controller('utilisateurs')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Post()
  @ApiCreatedResponse({
    description:'created user ',
    type:Utilisateur,
  })
  @ApiBadRequestResponse({
    description:'user cannot register'
  })
  create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateursService.create(createUtilisateurDto);
    return this.utilisateursService.create(createUtilisateurDto);
  }

  @Get()
  @ApiOkResponse({
    description:'users loaded',
    type:[Utilisateur]
  })
  @ApiBadRequestResponse({
    description:' cannot get users'
  })
  @ApiOkResponse({
    description:'users loaded',
    type:[Utilisateur]
  })
  @ApiBadRequestResponse({
    description:' cannot get users'
  })
   async findAll() {
    const users=await this.utilisateursService.findAll();
    return users
  }

  @Get(':id')
  @ApiOkResponse({
    description:'user loaded',
    type:Utilisateur
  })
  @ApiBadRequestResponse({
    description:' cannot get user'
  })
  @ApiOkResponse({
    description:'user loaded',
    type:Utilisateur
  })
  @ApiBadRequestResponse({
    description:' cannot get user'
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.utilisateursService.findOne(+id);
  }
 
 
  @Put(':id')
  @ApiResponse({
    status:204,
    description:'user updated',
  })
  @ApiBadRequestResponse({
    description:' cannot update user'
  })
  @ApiResponse({
    status:204,
    description:'user updated',
  })
  @ApiBadRequestResponse({
    description:' cannot update user'
  })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.utilisateursService.update(+id, updateUtilisateurDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description:'user deleted',
  })
  @ApiBadRequestResponse({
    description:' cannot delete user'
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.utilisateursService.remove(+id);
  }}