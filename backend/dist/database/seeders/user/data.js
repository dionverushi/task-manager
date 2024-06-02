"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUsers = void 0;
const user_role_enum_1 = require("../../../common/constants/user-role.enum");
const config_service_1 = require("../../../config/config.service");
exports.defaultUsers = [
    {
        firstName: 'Super',
        lastName: 'Admin',
        email: 'admin@gmail.com',
        password: config_service_1.configService.getValue('ADMIN_PASSWORD'),
        role: user_role_enum_1.UserRole.ADMIN,
    },
];
//# sourceMappingURL=data.js.map