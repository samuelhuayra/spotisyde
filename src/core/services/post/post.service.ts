import { Injectable } from '@nestjs/common';
import { Post as PostModel } from '@prisma/client';
import { PostDaoService } from 'src/prisma/services/post-dao/post-dao.service';

@Injectable()
export class PostService {
    constructor(
        private readonly postDaoService: PostDaoService
    ) { }

    async getPostById(id: number): Promise<PostModel> {
        return this.postDaoService.post({ id })
    }

    async getPublishedPosts(): Promise<PostModel[]> {
        return this.postDaoService.posts({
            where: { published: true },
        })
    }

    async getFilteredPosts(searchString: string): Promise<PostModel[]> {
        return this.postDaoService.posts({
            where: {
                OR: [
                    {
                        title: { contains: searchString },
                    },
                    {
                        content: { contains: searchString },
                    },
                ],
            },
        })
    }

    async createDraft(postData: { title: string; content?: string; authorEmail: string }): Promise<PostModel> {
        const { title, content, authorEmail } = postData;
        return this.postDaoService.createPost({
            title,
            content,
            User: {
                connect: { email: authorEmail },
            },
        })
    }

    async publishPost(id: number): Promise<PostModel> {
        return this.postDaoService.updatePost({
            where: { id },
            data: { published: true },
        })
    }

    async deletePost(id: number): Promise<PostModel> {
        return this.postDaoService.deletePost({ id })
    }
}
