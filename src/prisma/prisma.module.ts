import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserDaoService } from './services/user-dao/user-dao.service';
import { PostDaoService } from './services/post-dao/post-dao.service';

@Module({
  providers: [PrismaService, UserDaoService, PostDaoService],
  exports:[UserDaoService, PostDaoService]
})
export class PrismaModule { }
