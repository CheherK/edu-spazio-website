import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
const bcrypt=require('bcrypt');
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private usersService: UtilisateursService,
    private jwtService: JwtService
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findOneByUsername(username);
    
      if (!user || !bcrypt.compare(pass, user.password)) {
        throw new UnauthorizedException();
      }
    
      const payload = { sub: user.id, username: user.username, roles: user.admin };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    
}