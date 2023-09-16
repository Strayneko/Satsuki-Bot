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
const About_1 = __importDefault(require("../commands/About"));
const GenerateWaifu_1 = __importDefault(require("../commands/GenerateWaifu"));
const RemoveMember_1 = __importDefault(require("../commands/RemoveMember"));
const Sticker_1 = __importDefault(require("../commands/Sticker"));
const TagAll_1 = __importDefault(require("../commands/TagAll"));
const HelpReply_1 = __importDefault(require("../replies/HelpReply"));
const CommandHandlers = (message, client) => __awaiter(void 0, void 0, void 0, function* () {
    const messageBody = message.body.toLowerCase().trim();
    if (messageBody === '.help') {
        message.reply(HelpReply_1.default);
    }
    else if (messageBody === '.tagall') {
        (0, TagAll_1.default)(message, client);
    }
    else if (messageBody === '.waifu') {
        (0, GenerateWaifu_1.default)(message);
    }
    else if (messageBody === '.sticker') {
        (0, Sticker_1.default)(message);
    }
    else if (messageBody.includes('.kick')) {
        (0, RemoveMember_1.default)(message, client);
    }
    else if (messageBody === '.about') {
        (0, About_1.default)(message);
    }
});
exports.default = CommandHandlers;
