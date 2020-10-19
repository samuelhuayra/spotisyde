import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CoreModule } from '../core/core.module';
import { UserResolver } from './user/user.resolver';
import { PostResolver } from './post/post.resolver';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
            sortSchema: true
        }),
        CoreModule
    ],
    providers: [
        UserResolver,
        PostResolver
    ]
})
export class GraphqlModule { }
