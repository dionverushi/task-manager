"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const seeder_module_1 = require("./database/seeders/seeder.module");
const seeder_1 = require("./database/seeders/seeder");
const bootstrap = async () => {
    core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule)
        .then((appContext) => {
        const logger = appContext.get(common_1.Logger);
        const seeder = appContext.get(seeder_1.Seeder);
        seeder
            .seed()
            .then(() => {
            logger.debug('Seeding complete!');
        })
            .catch((error) => {
            logger.error('Seeding failed!');
            throw error;
        })
            .finally(() => appContext.close());
    })
        .catch((error) => {
        throw error;
    });
};
bootstrap();
//# sourceMappingURL=seed.js.map