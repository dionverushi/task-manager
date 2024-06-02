import { applyDecorators, Type } from '@nestjs/common';
import { ApiResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiPaginateDto = <TModel extends Type<any>>({
  type,
  status = 200,
  description = '',
}: {
  type: TModel;
  status?: number;
  description?: string;
}) => {
  return applyDecorators(
    ApiResponse({
      description,
      status,
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          meta: {
            type: 'object',
            properties: {
              total: {
                type: 'number',
              },
              page: {
                type: 'number',
              },
              pageSize: {
                type: 'number',
              },
              totalPages: {
                type: 'number',
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
  );
};

export const ApiSingleDto = <TModel extends Type<any>>({
  type,
  status = 200,
  description = '',
}: {
  type: TModel;
  status?: number;
  description?: string;
}) => {
  return applyDecorators(
    ApiResponse({
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
  );
};

export const ApiErrorDto = ({
  status = 200,
  description = '',
}: {
  status?: number;
  description?: string;
}) => {
  return applyDecorators(
    ApiResponse({
      description,
      status,
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          data: {
            type: 'array',
            items: { type: 'string' },
          },
        },
      },
    }),
  );
};
