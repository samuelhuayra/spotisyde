import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PostService } from 'src/core/services/post/post.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Post')
@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService,
    ) { }

    @Get(':id')
    async getPostById(@Param('id') id: string): Promise<PostModel> {
        return this.postService.getPostById(Number(id));
    }

    @Get('feed')
    async getPublishedPosts(): Promise<PostModel[]> {
        return this.postService.getPublishedPosts();
    }

    @Get('filtered-posts/:searchString')
    async getFilteredPosts(
        @Param('searchString') searchString: string,
    ): Promise<PostModel[]> {
        return this.postService.getFilteredPosts(searchString);
    }

    @Post()
    async createDraft(
        @Body() postData: { title: string; content?: string; authorEmail: string },
    ): Promise<PostModel> {
        return this.postService.createDraft(postData);
    }

    @Put('publish/:id')
    async publishPost(@Param('id') id: string): Promise<PostModel> {
        return this.postService.publishPost(Number(id));
    }

    @Delete('post/:id')
    async deletePost(@Param('id') id: string): Promise<PostModel> {
        return this.postService.deletePost(Number(id));
    }
}
