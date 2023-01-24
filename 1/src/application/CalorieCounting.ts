import { Elf } from "../domain/entities/Elf";
import { ElfFileRepository } from "../infrastructure/ElfFileRepository";
import { ElfRepository } from "../infrastructure/ElfRepository";
import { ElfService } from "./services/ElfService";

export class CalorieCounting {
  static NUMBER_OF_TOP_CALORIE_ELVES = 3;

  static async start() {
    const elfRepository: ElfRepository = new ElfFileRepository();
    const elves = await elfRepository.getElves();

    const topCalorieElves: Elf[] = ElfService.getTopElvesWithMoreCalories(
      elves,
      CalorieCounting.NUMBER_OF_TOP_CALORIE_ELVES
    );

    console.log(
      `Top ${
        CalorieCounting.NUMBER_OF_TOP_CALORIE_ELVES
      } elves sum of calories: ${ElfService.getSumOfElvesCalories(
        topCalorieElves
      )} calories`
    );
  }
}
