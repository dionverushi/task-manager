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
exports.UserSeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../modules/user/user.entity");
const typeorm_2 = require("typeorm");
const data_1 = require("./data");
const bcrypt = require("bcrypt");
let UserSeederService = class UserSeederService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async create() {
        const result = { created: 0, updated: 0 };
        for (const user of data_1.defaultUsers) {
            const { email, ...rest } = user;
            const foundUser = await this.userRepo.findOne({ where: { email } });
            rest.password = await bcrypt.hash(user.password, 10);
            if (!foundUser) {
                await this.userRepo.save(user);
                result.created += 1;
            }
            else {
                await this.userRepo.update({ email }, rest);
                result.updated += 1;
            }
        }
        return result;
    }
};
exports.UserSeederService = UserSeederService;
exports.UserSeederService = UserSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserSeederService);
//# sourceMappingURL=user.service.js.map