"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalorieCounting = void 0;
const ElfFileRepository_1 = require("../infrastructure/ElfFileRepository");
const ElfService_1 = require("./services/ElfService");
class CalorieCounting {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            const elfRepository = new ElfFileRepository_1.ElfFileRepository();
            const elves = yield elfRepository.getElves();
            const topCalorieElves = ElfService_1.ElfService.getTopElvesWithMoreCalories(elves, CalorieCounting.NUMBER_OF_TOP_CALORIE_ELVES);
            console.log(`Top ${CalorieCounting.NUMBER_OF_TOP_CALORIE_ELVES} elves sum of calories: ${ElfService_1.ElfService.getSumOfElvesCalories(topCalorieElves)} calories`);
        });
    }
}
exports.CalorieCounting = CalorieCounting;
CalorieCounting.NUMBER_OF_TOP_CALORIE_ELVES = 3;
