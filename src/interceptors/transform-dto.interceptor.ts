/* eslint-disable prettier/prettier */

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponsePostDto } from 'src/post/dtos/response-post.dto';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle().pipe(map((data) => {
                return plainToInstance(ResponsePostDto, data, {
                    excludeExtraneousValues: true,
                });
            }));
    }
}
