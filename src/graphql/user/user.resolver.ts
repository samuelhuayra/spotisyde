import { ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { User as UserModel,Post as PostModel } from '@prisma/client';
import { Post, PostArgs } from 'src/core/services/post/dto/post-dto';
import { PostService } from 'src/core/services/post/post.service';
import { User, UserQueryDto } from 'src/core/services/user/dto/user-dto';
import { UserService } from 'src/core/services/user/user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly postService: PostService
    ) { }

    @Query(() => User)
    user(@Args('id', ParseIntPipe) id: number): Promise<UserModel> {
        return this.userService.getById(id) 
    }

    @Query(() => [User])
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    users(@Args() userQueryDto: UserQueryDto): Promise<UserModel[]> {
        return this.userService.get(userQueryDto)
    }

    @ResolveField('posts', () => [Post])
    posts(@Parent() user: User): Promise<PostModel[]> {
        const { id } = user;
        return this.postService.get({ id } as PostArgs)
    }
}
