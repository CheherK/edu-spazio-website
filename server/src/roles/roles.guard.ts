import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Role } from './roles.decorator';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    const user = this.verifyTokenAndGetUser(token);

    console.log('User in RolesGuard:', user);

    const hasRequiredRole = requiredRoles.some((role) => user?.roles?.includes(role));
    console.log('Has required role:', hasRequiredRole);

    return hasRequiredRole;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authorizationHeader = request.headers['authorization'];
    if (authorizationHeader) {
      const [type, token] = authorizationHeader.split(' ');
      if (type === 'Bearer') {
        return token;
      }
    }
    return undefined;
  }

  private verifyTokenAndGetUser(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      return payload;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
