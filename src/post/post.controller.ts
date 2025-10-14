/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { TransformInterceptor } from 'src/interceptors/transform-dto.interceptor';

@Controller('posts') // REST
@UseInterceptors(TransformInterceptor)
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    create(@Body() requestBody: CreatePostDto) {
        return this.postService.create(requestBody);
    }

    @Get()
    getAll() {
        return this.postService.getAll();
    }
}
