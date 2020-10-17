/**
 * @author Samuel Huayra
 * @email samuelhuayra@icloud.com
 * @create date 2020-10-17 19:05:49
 * @modify date 2020-10-17 19:05:49
 * @desc PostController
 */
import { Controller, Get, Param, Post, Body, Put, Delete, Query, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PostService } from 'src/core/services/post/post.service';
import { ApiTags } from '@nestjs/swagger';
import { PostDto, PostQueryDto } from 'src/core/services/post/dto/post-dto';

@ApiTags('Post')
@Controller('posts')
export class PostController {
    constructor(
        private readonly postService: PostService,
    ) { }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
        return this.postService.getById(id);
    }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    async get(
        @Query() postQueryDto: PostQueryDto
    ): Promise<PostModel[]> {
        return this.postService.get(postQueryDto);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    async post(
        @Body() postDto: PostDto
    ): Promise<PostModel> {
        return this.postService.createPost(postDto);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    async put(
        @Param('id', ParseIntPipe) id: number,
        @Body() postDto: PostDto
    ): Promise<PostModel> {
        return this.postService.put(id, postDto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
        return this.postService.delete(id);
    }
}
