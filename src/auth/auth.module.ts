import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { BoardsModule } from '../boards/boards.module';
import { TasksModule } from '../tasks/tasks.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { CryptoService } from './crypto.service';
import { AuthController } from './auth.controller';
import { JWT_SECRET_KEY } from '../common/config';

@Module({
  imports: [
    UsersModule,
    TasksModule,
    BoardsModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: JWT_SECRET_KEY,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, CryptoService],
})
export class AuthModule {}
