import { INestApplication } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
export declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    getValue(key: string, throwOnMissing?: boolean, defaultValue?: string): string;
    ensureValues(keys: string[]): this;
    getAppUrl(): string;
    getPort(): string;
    getTokenConfig(): any;
    getTypeOrmConfig(): DataSourceOptions;
    configSwagger(app: INestApplication): void;
}
declare const configService: ConfigService;
export { configService };
