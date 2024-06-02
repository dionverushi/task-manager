import { Type } from '@nestjs/common';
export declare const RESPONSE_KEY = "dto";
export declare const ApiSingleResponse: <TModel extends Type<any>>({ type, status, description, }: {
    type: TModel;
    status?: number;
    description?: string;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const ApiMultipleResponse: <TModel extends Type<any>>({ type, status, description, }: {
    type: TModel;
    status?: number;
    description?: string;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
