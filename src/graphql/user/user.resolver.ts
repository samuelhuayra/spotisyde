import { ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { User as UserModel } from '@prisma/client';
import { UserService } from 'src/core/services/user/user.service';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Query()
    async usersGetById(
        @Args('id', ParseIntPipe)
        id: number,
    ): Promise<UserModel> {
        return this.userService.getById(id);
    }
    @Query()
    @UsePipes(new ValidationPipe({transform: true, transformOptions: {enableImplicitConversion: true}}))
    async usersGet<T=any>(
        root:T, { userQuery }
    ): Promise<UserModel[]> {
        return await this.userService.get(userQuery);
    }
}
