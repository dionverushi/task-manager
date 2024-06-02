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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const user_role_enum_1 = require("../../common/constants/user-role.enum");
const bcrypt = require("bcrypt");
const config_service_1 = require("../../config/config.service");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findAll(query) {
        return this.userRepo.findAndCount({ take: query.take, skip: query.skip });
    }
    async findOne(id) {
        const user = await this.userRepo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepo.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async createOne(body) {
        const user = await this.userRepo.findOne({ where: { email: body.email } });
        if (!!user) {
            throw new common_1.ConflictException('User already exists');
        }
        const created = this.userRepo.create(body);
        created.password = await bcrypt.hash(config_service_1.configService.getValue('ADMIN_PASSWORD'), 10);
        const saved = await this.userRepo.save(created);
        return saved;
    }
    async updateOne(body, currentUser) {
        const user = await this.findOne(body.id);
        if (currentUser.role === user_role_enum_1.UserRole.MANAGER &&
            user.role !== user_role_enum_1.UserRole.EMPLOYEE) {
            throw new common_1.UnauthorizedException();
        }
        await this.userRepo.update(user.id, body);
        return user;
    }
    async deleteOne(id, currentUser) {
        const user = await this.findOne(id);
        if (currentUser.role === user_role_enum_1.UserRole.MANAGER &&
            user.role !== user_role_enum_1.UserRole.EMPLOYEE) {
            throw new common_1.UnauthorizedException();
        }
        await this.userRepo.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map