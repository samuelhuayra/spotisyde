import { ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Post as PostModel } from '@prisma/client';
import { Post, PostArgs } from 'src/core/services/post/dto/post-dto';
import { PostService } from 'src/core/services/post/post.service';

@Resolver(() => Post)
export class PostResolver {
    constructor(
        private readonly postService: PostService,
    ) { }

    @Query(() => Post)
    post(@Args('id', ParseIntPipe) id: number): Promise<PostModel | null> {
        return this.postService.getById(id)
    }

    @Query(() => [Post])
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    posts(@Args() postArgs: PostArgs): Promise<PostModel[]> {
        return this.postService.get(postArgs)
    }
}
