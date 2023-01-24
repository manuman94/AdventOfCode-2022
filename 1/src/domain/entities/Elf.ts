import { CalorieItem } from "./CalorieItem";

export class Elf {
  constructor(public id: number, public calorieItems: CalorieItem[]) {}

  getSumOfCalories(): number {
    return this.calorieItems.reduce(
      (previousValue: number, currentValue: CalorieItem) => {
        return previousValue + currentValue.calories;
      },
      0
    );
  }
}
