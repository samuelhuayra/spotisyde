import { Injectable } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PostDaoService } from 'src/prisma/services/post-dao/post-dao.service';
import { BaseService } from '../base/base-service';
import { PostDto, PostArgs } from './dto/post-dto';

@Injectable()
export class PostService extends BaseService<PostDto, PostArgs, PostModel> {
    constructor(
        private readonly postDaoService: PostDaoService
    ) {
        super(postDaoService)
    }

    async createPost(postDto: PostDto): Promise<PostModel> {
        const { title, content, published, authorId } = postDto
        return this.postDaoService.create({
            title,
            content,
            published,
            User: {
                connect: { id: authorId }
            }
        })
    }
}
