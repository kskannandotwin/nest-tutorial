/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts') // REST
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post() // posts/abc
    create() {
        return this.postService.create();
    }
}
