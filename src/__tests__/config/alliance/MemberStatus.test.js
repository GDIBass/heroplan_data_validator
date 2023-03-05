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
const MemberStatus_1 = __importDefault(require("../../../config/alliance/MemberStatus"));
const MissingRequiredKey_1 = __importDefault(require("../../../error/MissingRequiredKey"));
const InvalidConfig_1 = __importDefault(require("../../../error/InvalidConfig"));
const key = 'member_status';
const validMemberStatus = {
    key,
    id: '1234',
    description: 'Member Status',
    manager: 'true'
};
(0, globals_1.describe)('MemberStatus building', () => {
    (0, globals_1.test)('MemberStatus.test.ts succeeds with successful', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, globals_1.expect)(new MemberStatus_1.default(key, validMemberStatus)).toBeInstanceOf(MemberStatus_1.default);
    }));
    globals_1.it.each(['key', 'id', 'description'])('MemberStatus.test.ts without required keys fails', (requiredKey) => __awaiter(void 0, void 0, void 0, function* () {
        const status = Object.assign({}, validMemberStatus);
        delete status[requiredKey];
        (0, globals_1.expect)(() => new MemberStatus_1.default(key, status)).toThrow(MissingRequiredKey_1.default);
    }));
    (0, globals_1.test)('MemberStatus.test.ts key mismatch fails', () => __awaiter(void 0, void 0, void 0, function* () {
        const status = Object.assign({}, validMemberStatus);
        status.key = 'wrong';
        (0, globals_1.expect)(() => new MemberStatus_1.default(key, status)).toThrow(InvalidConfig_1.default);
    }));
    (0, globals_1.test)('MemberStatus.test.ts id is not integer fails', () => __awaiter(void 0, void 0, void 0, function* () {
        const status = Object.assign({}, validMemberStatus);
        status.id = 'wrong';
        (0, globals_1.expect)(() => new MemberStatus_1.default(key, status)).toThrow(InvalidConfig_1.default);
    }));
});
