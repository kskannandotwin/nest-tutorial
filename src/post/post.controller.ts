/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller()
@UseGuards(AuthGuard)
export class PostController {
    constructor(private postService: PostService) { }
    @Get('/posts')
    getAll() {
        return this.postService.getAll();
    }

    @Get('/posts/:id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.postService.getOne(id);
    }
}
