import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './graphql/app/app.resolver';
// import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    AuthorizationModule,
    ConfigModule.forRoot({
      envFilePath: 'environments/development.env'
      // envFilePath:'environments/production.env'
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }
