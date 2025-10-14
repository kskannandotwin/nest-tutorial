/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dtos/create-post.dto';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) { }

    async create(data: CreatePostDto) {
        const createdPost = new this.postModel(data);

        const post = await createdPost.save(); // real entity

        return post;
    }

    async getAll() {
        // const posts = await this.postModel.find().exec();
        const posts = await this.postModel.find();

        return posts;
    }
}
