"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = exports.ConfigService = void 0;
const swagger_1 = require("@nestjs/swagger");
const message_dto_1 = require("../common/dto/message.dto");
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true, defaultValue) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
        }
        if (!value && defaultValue !== undefined) {
            return defaultValue;
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getAppUrl() {
        return this.getValue('APP_URL') ?? 'http://localhost:3000/';
    }
    getPort() {
        return this.getValue('RUNNING_PORT', true);
    }
    getTokenConfig() {
        return {
            secret: this.getValue('SECRET'),
            refreshTokenSecret: this.getValue('REFRESH_TOKEN_SECRET'),
            tokenLife: parseInt(this.getValue('TOKEN_LIFE')),
            refreshTokenLife: parseInt(this.getValue('REFRESH_TOKEN_LIFE')),
        };
    }
    getTypeOrmConfig() {
        const entities = [__dirname + '/../**/*.entity{.ts,.js}'];
        const migrationsDir = [
            __dirname + '/../database/migrations/*{.ts,.js}',
        ];
        return {
            type: 'postgres',
            host: this.getValue('TYPEORM_HOST'),
            port: parseInt(this.getValue('TYPEORM_PORT'), 10),
            username: this.getValue('TYPEORM_USERNAME'),
            password: this.getValue('TYPEORM_PASSWORD'),
            database: this.getValue('TYPEORM_DATABASE'),
            entities,
            synchronize: this.getValue('TYPEORM_SYNCHRONIZE') === 'true',
            logging: this.getValue('TYPEORM_LOGGING') === 'true',
            ssl: false,
            migrationsRun: this.getValue('TYPEORM_MIGRATIONS_RUN') === 'true',
            migrationsTableName: 'migrations',
            migrations: migrationsDir,
        };
    }
    configSwagger(app) {
        const swaggerConfig = new swagger_1.DocumentBuilder()
            .setTitle('Task Scheduler')
            .setDescription('API Requests Description')
            .setVersion('1.0.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' }, 'access-token')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig, {
            extraModels: [message_dto_1.MessageDto],
        });
        swagger_1.SwaggerModule.setup('api/documentation', app, document);
    }
}
exports.ConfigService = ConfigService;
const configService = new ConfigService(process.env);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map