/* eslint-disable prettier/prettier */

import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UseInterceptors } from '@nestjs/common';
import * as classTransformer from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function TransformDto<T>(dto: classTransformer.ClassConstructor<T>) {
    return UseInterceptors(new TransformInterceptor<T>(dto));
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor {
    constructor(private readonly dtoClass: classTransformer.ClassConstructor<T>) { }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle().pipe(map((data) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                return classTransformer.plainToInstance(this.dtoClass, data, {
                    excludeExtraneousValues: true,
                });
            }));
    }
}
