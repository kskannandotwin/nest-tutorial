/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) { }

    create() {
        const createdPost = new this.postModel({
            title: 'Post 1',
            description: 'Description 1',
        });

        return createdPost.save();
    }
}
