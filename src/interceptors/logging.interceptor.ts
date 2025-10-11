
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// request -> middleware -> guard -> interceptor -> route handler -> interceptor -> response

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Interceptor...');

    return next
      .handle()
      .pipe(tap(() => console.log('Before response result')));
  }
}
