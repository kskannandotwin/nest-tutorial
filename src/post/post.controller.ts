/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts') // REST
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    create(@Body() requestBody: CreatePostDto) {
        return this.postService.create(requestBody);
    }
}
