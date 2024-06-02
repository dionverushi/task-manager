import { Type } from '@nestjs/common';
export declare const ApiPaginateDto: <TModel extends Type<any>>({ type, status, description, }: {
    type: TModel;
    status?: number;
    description?: string;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const ApiSingleDto: <TModel extends Type<any>>({ type, status, description, }: {
    type: TModel;
    status?: number;
    description?: string;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const ApiErrorDto: ({ status, description, }: {
    status?: number;
    description?: string;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
