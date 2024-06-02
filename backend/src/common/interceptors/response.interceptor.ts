import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PageMetaDto } from '../dto/page-meta.dto';
import { Reflector } from '@nestjs/core';
import { RESPONSE_KEY } from '../decorators/api-response.decorator';

function isList(value: any): boolean {
  if (Array.isArray(value)) {
    if (value.length >= 2 && typeof value[1] === 'number') {
      return true;
    }
  }
  return false;
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res: any) => this.responseHandler(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }

  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      status: 'error',
      statusCode: status,
      path: request.url,
      message: exception.message,
      result: exception,
    });
  }

  responseHandler<T>(
    data: T,
    context: ExecutionContext,
  ): Response<T, Record<string, any>> {
    const ctx = context.switchToHttp();
    const res: Response = ctx.getResponse();
    const req = ctx.getRequest();

    const type = Reflect.getMetadata(RESPONSE_KEY, context.getHandler());

    const response: any = {
      status: res.statusCode,
      data,
    };

    if (isList(response.data)) {
      response.meta = new PageMetaDto({
        itemCount: response.data[1],
        pageOptionsDto: req.query,
      });
      response.data = response.data[0];
    }

    if (!!type) {
      response.data = instanceToPlain(
        plainToInstance(type, response.data, {
          excludeExtraneousValues: true,
        }),
      );
    }

    return response;
  }
}
