import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CoreModule } from '../core/core.module';
import { UserResolver } from './user/user.resolver';
import { PostResolver } from './post/post.resolver';

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
        UserResolver,
        PostResolver
    ]
})
export class GraphqlModule { }
