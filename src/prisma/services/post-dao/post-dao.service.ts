import { Injectable } from '@nestjs/common';
import {
    Post,
    PostWhereUniqueInput,
    PostWhereInput,
    PostCreateInput,
    PostUpdateInput,
    PostOrderByInput
} from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { BaseDaoService } from '../base-dao/base-dao-service';

@Injectable()
export class PostDaoService extends BaseDaoService<Post, PostWhereUniqueInput, PostWhereInput, PostCreateInput, PostUpdateInput, PostOrderByInput> {
    constructor(private prisma: PrismaService) {
        super(prisma.post)
    }
}
