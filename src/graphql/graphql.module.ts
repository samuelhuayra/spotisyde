import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app/app.resolver';
import { CoreModule } from '../core/core.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            typePaths: ['./**/*.graphql']
        }),
        CoreModule
    ],
    providers:[
        AppResolver
    ]
})
export class GraphqlModule { }
