import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'environments/development.env'
      // envFilePath:'environments/production.env'
    }),
    ApiModule,
    GraphqlModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
