import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './signIn.Dto';
import { AuthGuard } from './auth.guard';
import { Request } from 'express'; // Import the Request object

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
    @Get()
    @UseGuards(AuthGuard) // Apply AuthGuard for testing purposes
    testRoute(@Req() request: Request) {
      console.log('User object:', request['user']); // Log the user object
      return 'Test route';
    }
    
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: signInDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  }
