import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app/app.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            typePaths: ['./**/*.graphql']
        }),
        PrismaModule
    ],
    providers:[
        AppResolver
    ]
})
export class GraphqlModule { }
