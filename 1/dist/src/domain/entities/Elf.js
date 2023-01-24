"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elf = void 0;
class Elf {
    constructor(id, calorieItems) {
        this.id = id;
        this.calorieItems = calorieItems;
    }
    getSumOfCalories() {
        return this.calorieItems.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.calories;
        }, 0);
    }
}
exports.Elf = Elf;
