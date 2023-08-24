import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { UtilisateursModule } from 'src/utilisateurs/utilisateurs.module';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard here

@Module({
  imports: [
    UtilisateursModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, AuthGuard], // Add AuthGuard to the providers
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
