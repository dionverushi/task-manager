import { NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
export declare class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    errorHandler(exception: HttpException, context: ExecutionContext): void;
    responseHandler<T>(data: T, context: ExecutionContext): Response<T, Record<string, any>>;
}
