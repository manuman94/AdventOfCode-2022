import { Elf } from "../domain/entities/Elf";

export interface ElfRepository {
  getElves(): Promise<Elf[]>;
}
