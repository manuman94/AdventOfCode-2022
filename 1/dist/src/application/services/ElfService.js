"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElfService = void 0;
class ElfService {
    static getTopElvesWithMoreCalories(elves, numberOfTopCalorieElves) {
        const topCalorieElves = [];
        for (let i = 0; i < numberOfTopCalorieElves; i++) {
            topCalorieElves.push(ElfService.getElfWithMoreCalories(elves, topCalorieElves));
        }
        return topCalorieElves;
    }
    static getElfWithMoreCalories(elves, ignoreElves = []) {
        return elves.reduce((previousElf, currentElf) => {
            if (ignoreElves.some((elf) => elf.id === currentElf.id)) {
                return previousElf;
            }
            return previousElf.getSumOfCalories() > currentElf.getSumOfCalories()
                ? previousElf
                : currentElf;
        });
    }
    static getSumOfElvesCalories(elves) {
        return elves.reduce((previous, currentElf) => {
            return previous + currentElf.getSumOfCalories();
        }, 0);
    }
}
exports.ElfService = ElfService;
