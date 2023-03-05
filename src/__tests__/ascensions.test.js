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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const AscensionsConfig_1 = __importDefault(require("../config/AscensionsConfig"));
const ascensions_1 = __importDefault(require("../ascensions"));
(0, globals_1.test)('Valid ascensions file succeeds', () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, ascensions_1.default)('./testData/ascensions/valid.yml');
    (0, globals_1.expect)(result).toBeInstanceOf(AscensionsConfig_1.default);
}));
(0, globals_1.test)('Valid ascension file sets max ascension', () => __awaiter(void 0, void 0, void 0, function* () { }));
(0, globals_1.test)('Valid ascension file sets ascensions', () => __awaiter(void 0, void 0, void 0, function* () { }));
(0, globals_1.test)('Unparsable yaml fails', () => __awaiter(void 0, void 0, void 0, function* () { }));
(0, globals_1.test)('Missing file fails', () => __awaiter(void 0, void 0, void 0, function* () { }));
(0, globals_1.test)('Key mismatch fails', () => __awaiter(void 0, void 0, void 0, function* () { }));
