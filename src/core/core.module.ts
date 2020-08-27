import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './services/user/user.service';
import { PostService } from './services/post/post.service';

@Module({
  imports: [
    PrismaModule
  ],
  providers: [
    UserService,
    PostService
  ],
  exports:[
    UserService,
    PostService
  ]
})
export class CoreModule { }
