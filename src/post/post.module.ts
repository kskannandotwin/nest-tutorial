/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({
    imports: [],
    controllers: [PostController],
    providers: [PostService],
    exports: [PostModule],
})
export class PostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}