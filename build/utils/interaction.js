"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let numberOneQuestion = [{
        type: 'number',
        name: 'numberOne',
        message: 'Enter the first number: ',
        default: 17
    }];
let numberTwoQuestion = [{
        type: 'number',
        name: 'numberTwo',
        message: 'Enter the second number: ',
        default: 53
    }];
function requestNumberOne() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield inquirer_1.default.prompt(numberOneQuestion)).numberOne;
    });
}
exports.requestNumberOne = requestNumberOne;
function requestNumberTwo() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield inquirer_1.default.prompt(numberTwoQuestion)).numberTwo;
    });
}
exports.requestNumberTwo = requestNumberTwo;
