import { Controller, Get, Post, Body, Put, Param, Delete,ParseIntPipe } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Contact } from './entities/contact.entity';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiCreatedResponse({
    description:'created contact ',
    type:Contact,
  })
  @ApiBadRequestResponse({
    description:'contact cannot register'
  })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  @ApiOkResponse({
    description:'contacts loaded',
    type:[Contact]
  })
  @ApiBadRequestResponse({
    description:' cannot get contacts'
  })
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description:'contact loaded',
    type:Contact
  })
  @ApiBadRequestResponse({
    description:' cannot get contact'
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.contactService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({
    status:204,
    description:'contact updated',
  })
  @ApiBadRequestResponse({
    description:' cannot update contact'
  })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(+id, updateContactDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description:'contact deleted',
  })
  @ApiBadRequestResponse({
    description:' cannot delete contact'
  })
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.contactService.remove(+id);
  }
}
