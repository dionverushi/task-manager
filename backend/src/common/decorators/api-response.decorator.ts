import { SetMetadata, Type, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger';

export const RESPONSE_KEY = 'dto';

export const ApiSingleResponse = <TModel extends Type<any>>({
  type,
  status = 200,
  description = '',
}: {
  type: TModel;
  status?: number;
  description?: string;
}) => {
  return applyDecorators(
    SetMetadata(RESPONSE_KEY, type),
    ApiOkResponse({
      description,
      status,
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          data: {
            $ref: getSchemaPath(type),
          },
        },
      },
    }),
    ApiBadRequestResponse({ description: 'Bad request' }),
    ApiInternalServerErrorResponse({ description: 'Internal server error' }),
  );
};

export const ApiMultipleResponse = <TModel extends Type<any>>({
  type,
  status = 200,
  description = '',
}: {
  type: TModel;
  status?: number;
  description?: string;
}) => {
  return applyDecorators(
    SetMetadata(RESPONSE_KEY, type),
    ApiOkResponse({
      description,
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          meta: {
            type: 'object',
            properties: {
              page: {
                type: 'number',
                default: 1,
              },
              take: {
                type: 'number',
                default: 10,
              },
              itemCount: {
                type: 'number',
                default: 10,
              },
              pageCount: {
                type: 'number',
                default: 1,
              },
              hasPreviousPage: {
                type: 'boolean',
                default: false,
              },
              hasNextPage: {
                type: 'boolean',
                default: false,
              },
            },
          },
          data: {
            type: 'array',
            items: { $ref: getSchemaPath(type) },
          },
        },
      },
    }),
    ApiBadRequestResponse({ description: 'Bad request' }),
    ApiInternalServerErrorResponse({ description: 'Internal server error' }),
  );
};
