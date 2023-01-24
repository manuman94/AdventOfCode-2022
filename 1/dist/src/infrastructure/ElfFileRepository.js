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
exports.ElfFileRepository = void 0;
const Elf_1 = require("../domain/entities/Elf");
const promises_1 = require("fs/promises");
class ElfFileRepository {
    constructor() {
        this.INPUT_FILE_PATH = "./input/input.txt";
        this.FIELD_SEPARATOR = "\r\n";
        this.ITEM_SEPARATOR = "\r\n\r\n";
    }
    getElves() {
        return __awaiter(this, void 0, void 0, function* () {
            const elfFileContent = yield this.readFile();
            return this.parseFile(elfFileContent);
        });
    }
    readFile() {
        /**
         * We could improve this function reading the file by chunks,
         * that would allow reading bigger files.
         */
        return (0, promises_1.readFile)(this.INPUT_FILE_PATH, { encoding: "utf-8" });
    }
    parseFile(fileContent) {
        const itemStrings = this.splitItems(fileContent);
        const items = [];
        let itemIndex = 0;
        for (const item of itemStrings) {
            items.push(this.splitFields(itemIndex, item));
            itemIndex++;
        }
        return items;
    }
    splitItems(fileContent) {
        return fileContent.split(this.ITEM_SEPARATOR);
    }
    splitFields(index, itemContent) {
        const fields = itemContent.split(this.FIELD_SEPARATOR);
        const calorieItems = [];
        for (const field of fields) {
            calorieItems.push({ calories: parseInt(field) });
        }
        return new Elf_1.Elf(index, calorieItems);
    }
}
exports.ElfFileRepository = ElfFileRepository;
