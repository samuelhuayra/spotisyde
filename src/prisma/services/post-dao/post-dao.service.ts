/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 18:12:44
 * @modify date 2020-10-17 18:12:44
 * @desc [description]
 */
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
        super(prisma.post);
    }
}
