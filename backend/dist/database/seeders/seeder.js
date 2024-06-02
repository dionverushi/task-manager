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
exports.Seeder = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user/user.service");
let Seeder = class Seeder {
    constructor(logger, userSeederService) {
        this.logger = logger;
        this.userSeederService = userSeederService;
    }
    async seed() {
        await this.users()
            .then((completed) => {
            this.logger.debug('Successfuly completed seeding tasks...');
            Promise.resolve(completed);
        })
            .catch((error) => {
            this.logger.error('Failed seeding tasks...');
            Promise.reject(error);
        });
    }
    async users() {
        return await this.userSeederService
            .create()
            .then(({ created, updated }) => {
            this.logger.debug(`No. of users created : ` + created);
            this.logger.debug(`No. of users updated : ` + updated);
            return Promise.resolve(true);
        })
            .catch((error) => Promise.reject(error));
    }
};
exports.Seeder = Seeder;
exports.Seeder = Seeder = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(user_service_1.UserSeederService)),
    __metadata("design:paramtypes", [common_1.Logger,
        user_service_1.UserSeederService])
], Seeder);
//# sourceMappingURL=seeder.js.map