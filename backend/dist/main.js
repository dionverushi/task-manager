"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./config/config.service");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    const port = config_service_1.configService.getPort();
    config_service_1.configService.configSwagger(app);
    app.enableCors({
        origin: '*',
    });
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map