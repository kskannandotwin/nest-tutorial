/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import * as postSchema from './schemas/post.schema';

@Controller('posts') // REST
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    create(@Body() requestBody: postSchema.PostDocument) {
        return this.postService.create(requestBody);
    }
}
