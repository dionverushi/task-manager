import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MessageDto } from 'src/common/dto/message.dto';
import { DataSourceOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(
    key: string,
    throwOnMissing = true,
    defaultValue?: string,
  ): string {
    const value = this.env[key];

    if (!value && throwOnMissing) {
      // throw new Error(`config error - missing env.${key}`);
    }

    // Return default value if not found.
    if (!value && defaultValue !== undefined) {
      return defaultValue;
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getAppUrl() {
    return this.getValue('APP_URL') ?? 'http://localhost:3000/';
  }

  public getPort() {
    return this.getValue('RUNNING_PORT', true);
  }

  public getTokenConfig(): any {
    return {
      secret: this.getValue('SECRET'),
      refreshTokenSecret: this.getValue('REFRESH_TOKEN_SECRET'),
      tokenLife: parseInt(this.getValue('TOKEN_LIFE')),
      refreshTokenLife: parseInt(this.getValue('REFRESH_TOKEN_LIFE')),
    };
  }

  public getTypeOrmConfig(): DataSourceOptions {
    const entities: string[] = [__dirname + '/../**/*.entity{.ts,.js}'];
    const migrationsDir: string[] = [
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

  public configSwagger(app: INestApplication) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Task Scheduler')
      .setDescription('API Requests Description')
      .setVersion('1.0.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
        'access-token',
      )
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig, {
      extraModels: [MessageDto],
    });
    SwaggerModule.setup('api/documentation', app, document);
  }
}

const configService = new ConfigService(process.env);

export { configService };
