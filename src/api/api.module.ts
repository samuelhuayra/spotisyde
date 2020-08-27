import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';

@Module({
    imports: [
        CoreModule
    ],
    controllers: [UserController, PostController]
})
export class ApiModule { }
