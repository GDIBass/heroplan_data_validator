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
const AllianceConfig_1 = __importDefault(require("../config/AllianceConfig"));
const alliance_1 = __importDefault(require("../alliance"));
const InvalidConfig_1 = __importDefault(require("../error/InvalidConfig"));
const YamlParseFailed_1 = __importDefault(require("../error/YamlParseFailed"));
const MissingRequiredKey_1 = __importDefault(require("../error/MissingRequiredKey"));
const FileLoadFailed_1 = __importDefault(require("../error/FileLoadFailed"));
(0, globals_1.test)('valid alliance file succeeds', () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, alliance_1.default)('./testData/alliance/valid_alliance.yml');
    (0, globals_1.expect)(result).toBeInstanceOf(AllianceConfig_1.default);
}));
(0, globals_1.test)('valid alliance file has two statuses', () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, alliance_1.default)('./testData/alliance/valid_alliance.yml');
    (0, globals_1.expect)(result.member_status).toHaveProperty('none');
    (0, globals_1.expect)(result.member_status.none.id).toEqual(0);
}));
(0, globals_1.test)('duplicate id for member_status fails', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, alliance_1.default)('./testData/alliance/duplicate_id.yml');
    }
    catch (error) {
        (0, globals_1.expect)(error).toBeInstanceOf(InvalidConfig_1.default);
        if (error instanceof InvalidConfig_1.default) {
            (0, globals_1.expect)(error.message).toContain('Duplicate ID found | child=member_status');
        }
    }
}));
(0, globals_1.test)('invalid yaml fails', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, alliance_1.default)('./testData/alliance/invalid_yaml.yml');
    }
    catch (error) {
        (0, globals_1.expect)(error).toBeInstanceOf(YamlParseFailed_1.default);
        if (error instanceof YamlParseFailed_1.default) {
            (0, globals_1.expect)(error.message).toContain('Could not parse yaml file');
        }
    }
}));
(0, globals_1.test)('key mismatch fails', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, alliance_1.default)('./testData/alliance/key_mismatch.yml');
    }
    catch (error) {
        (0, globals_1.expect)(error).toBeInstanceOf(InvalidConfig_1.default);
        if (error instanceof InvalidConfig_1.default) {
            (0, globals_1.expect)(error.message).toContain('MemberStatus:keys do not match: request:requestoooo');
        }
    }
}));
(0, globals_1.test)('missing member status fails', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, alliance_1.default)('./testData/alliance/missing_member_status_key.yml');
    }
    catch (error) {
        (0, globals_1.expect)(error).toBeInstanceOf(MissingRequiredKey_1.default);
        if (error instanceof MissingRequiredKey_1.default) {
            (0, globals_1.expect)(error.message).toContain('Config is missing key | AllianceConfig:member_status');
        }
    }
}));
(0, globals_1.test)('no file fails', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, alliance_1.default)('./testData/alliance/not_an_actual_file.yml');
    }
    catch (error) {
        (0, globals_1.expect)(error).toBeInstanceOf(FileLoadFailed_1.default);
        if (error instanceof FileLoadFailed_1.default) {
            (0, globals_1.expect)(error.message).toContain('File failed to load');
        }
    }
}));
