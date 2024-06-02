"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentProject = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentProject = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.project;
});
//# sourceMappingURL=current-project.decorator.js.map