import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { PrismaService } from './prisma/prisma.service';
import { PostService } from './services/post/post.service';

@Module({
  providers: [UserService, PrismaService, PostService]
})
export class PrismaModule {}
