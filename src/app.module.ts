import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { ApiModule } from './api/api.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'environments/development.env'
      // envFilePath:'environments/production.env'
    }),
    ApiModule,
    GraphqlModule,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
