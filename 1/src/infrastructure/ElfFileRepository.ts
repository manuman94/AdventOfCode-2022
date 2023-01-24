import { Elf } from "../domain/entities/Elf";
import { ElfRepository } from "./ElfRepository";
import { readFile as fsReadFile } from "fs/promises";
import { CalorieItem } from "../domain/entities/CalorieItem";

export class ElfFileRepository implements ElfRepository {
  private readonly INPUT_FILE_PATH = "./input/input.txt";
  private readonly FIELD_SEPARATOR = "\r\n";
  private readonly ITEM_SEPARATOR = "\r\n\r\n";

  async getElves(): Promise<Elf[]> {
    const elfFileContent = await this.readFile();
    return this.parseFile(elfFileContent);
  }

  private readFile(): Promise<string> {
    /**
     * We could improve this function reading the file by chunks,
     * that would allow reading bigger files.
     */
    return fsReadFile(this.INPUT_FILE_PATH, { encoding: "utf-8" });
  }

  private parseFile(fileContent: string): Elf[] {
    const itemStrings = this.splitItems(fileContent);
    const items: Elf[] = [];
    let itemIndex = 0;
    for (const item of itemStrings) {
      items.push(this.splitFields(itemIndex, item));
      itemIndex++;
    }
    return items;
  }

  private splitItems(fileContent: string): string[] {
    return fileContent.split(this.ITEM_SEPARATOR);
  }

  private splitFields(index: number, itemContent: string): Elf {
    const fields = itemContent.split(this.FIELD_SEPARATOR);
    const calorieItems: CalorieItem[] = [];
    for (const field of fields) {
      calorieItems.push({ calories: parseInt(field) });
    }
    return new Elf(index, calorieItems);
  }
}
