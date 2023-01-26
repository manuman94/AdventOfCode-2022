import { Elf } from "../entities/Elf";

export interface ElfRepository {
  getElves(): Promise<Elf[]>;
}
