"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const user_entity_1 = require("./user.entity");
const api_response_decorator_1 = require("../../common/decorators/api-response.decorator");
const user_response_dto_1 = require("./dto/user-response.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
let MeController = class MeController {
    getMe(user) {
        return user;
    }
};
exports.MeController = MeController;
__decorate([
    (0, common_1.Get)(),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: user_response_dto_1.UserResponseDto }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "getMe", null);
exports.MeController = MeController = __decorate([
    (0, common_1.Controller)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)
], MeController);
//# sourceMappingURL=me.controller.js.map