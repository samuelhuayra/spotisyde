import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
    User,
    UserWhereUniqueInput,
    UserWhereInput,
    UserCreateInput,
    UserUpdateInput,
    UserOrderByInput
} from '@prisma/client';
import { BaseDaoService } from '../base-dao/base-dao-service';

@Injectable()
export class UserDaoService extends BaseDaoService<User, UserWhereUniqueInput, UserWhereInput, UserCreateInput, UserUpdateInput, UserOrderByInput>{
    constructor(private prisma: PrismaService) {
        super(prisma.user);
    }
}
