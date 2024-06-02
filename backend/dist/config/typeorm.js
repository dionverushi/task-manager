"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_service_1 = require("./config.service");
exports.default = new typeorm_1.DataSource(config_service_1.configService.getTypeOrmConfig());
//# sourceMappingURL=typeorm.js.map