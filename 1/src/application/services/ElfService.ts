import { Elf } from "../../domain/entities/Elf";

export class ElfService {
  static getTopElvesWithMoreCalories(
    elves: Elf[],
    numberOfTopCalorieElves: number
  ): Elf[] {
    const topCalorieElves: Elf[] = [];
    for (let i = 0; i < numberOfTopCalorieElves; i++) {
      topCalorieElves.push(
        ElfService.getElfWithMoreCalories(elves, topCalorieElves)
      );
    }
    return topCalorieElves;
  }

  static getElfWithMoreCalories(elves: Elf[], ignoreElves: Elf[] = []) {
    return elves.reduce((previousElf: Elf, currentElf: Elf) => {
      if (ignoreElves.some((elf) => elf.id === currentElf.id)) {
        return previousElf;
      }
      return previousElf.getSumOfCalories() > currentElf.getSumOfCalories()
        ? previousElf
        : currentElf;
    });
  }

  static getSumOfElvesCalories(elves: Elf[]) {
    return elves.reduce((previous: number, currentElf: Elf) => {
      return previous + currentElf.getSumOfCalories();
    }, 0);
  }
}
