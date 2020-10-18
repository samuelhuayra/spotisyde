import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Post as PostModel} from '@prisma/client';
import { PostQueryDto } from 'src/core/services/post/dto/post-dto';
import { PostService } from 'src/core/services/post/post.service';

@Resolver('Post')
export class PostResolver {
    constructor(
        private readonly postService: PostService,
    ) { }
    
    @Query()
    async postsGetById(
        @Args('id', ParseIntPipe)
        id: number,
    ): Promise<PostModel> {
        return this.postService.getById(id);
    }
    @Query()
    async postsGet(): Promise<PostModel[]> {
        return await this.postService.get({} as PostQueryDto);
    }
}
