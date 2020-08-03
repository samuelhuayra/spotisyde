import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [AuthorizationModule,
    ConfigModule.forRoot({
      envFilePath:'environments/development.env'
      // envFilePath:'environments/production.env'
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
