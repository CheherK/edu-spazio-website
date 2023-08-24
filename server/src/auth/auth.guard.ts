import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    console.log('Token:', token);

if (!token) {
  console.log('No token found');
  throw new UnauthorizedException('No token found');
}

try {
  const payload = await this.jwtService.verifyAsync(
    token,
    {
      secret: jwtConstants.secret
    }
  );
  console.log('JWT Payload:', payload);

  request['user'] = payload;
} catch (error) {
  console.log('Error verifying token:', error);
  throw new UnauthorizedException('Error verifying token');
}


    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
