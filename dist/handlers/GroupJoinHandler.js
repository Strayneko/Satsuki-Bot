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
const config_json_1 = __importDefault(require("../config/config.json"));
const emoji_json_1 = __importDefault(require("../config/emoji.json"));
const Helper_1 = require("../helper/Helper");
const GroupJoinHandler = (notification) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield notification.getRecipients();
    const contact = (0, Helper_1.findAffectedContact)(contacts);
    const contactName = (0, Helper_1.getContactName)(contact);
    const contactMe = contact !== null && contact !== void 0 ? contact : contacts[0];
    if (contactMe === null || contactMe === void 0 ? void 0 : contactMe.isMe) {
        notification.reply(`*Hello Master. My name is ${config_json_1.default.BOT_NAME}, i can do a lot of things for you~.*\n\n*To understand what kind of things that i can do, just type .help in the chat.*\n\n*Nice to meet you Master!! ${emoji_json_1.default.happy}*`);
        return;
    }
    notification.reply(`_A wild *${contactName !== null && contactName !== void 0 ? contactName : 'Anomymous'}* appeared._`);
});
exports.default = GroupJoinHandler;
