import { Controller, Get, Param, Post, Body, Put, Delete, Query, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PostService } from 'src/core/services/post/post.service';
import { ApiTags } from '@nestjs/swagger';
import { PostDto, PostArgs } from 'src/core/services/post/dto/post-dto';

@ApiTags('Post')
@Controller('posts')
export class PostController {
    constructor(
        private readonly postService: PostService,
    ) { }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
        return this.postService.getById(id)
    }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    get(@Query() postQueryDto: PostArgs): Promise<PostModel[]> {
        return this.postService.get(postQueryDto)
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    post(@Body() postDto: PostDto): Promise<PostModel> {
        return this.postService.createPost(postDto)
    }

    @Put(':id')
    @UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
    put(@Param('id', ParseIntPipe) id: number, @Body() postDto: PostDto): Promise<PostModel> {
        return this.postService.put(id, postDto)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<PostModel> {
        return this.postService.delete(id)
    }
}
