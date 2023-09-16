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
const RemoveMember = (message, client) => __awaiter(void 0, void 0, void 0, function* () {
    const messageBody = message.body.trim().split(' ')[0].trim();
    if (messageBody !== '.kick')
        return;
    const chat = yield message.getChat();
    if (!chat.isGroup) {
        chat.sendMessage(`*Master ${config_json_1.default.BOT_NAME} can't complete your order, because we're not in the group chat. ${emoji_json_1.default.sad}*`);
        return;
    }
    // to check whether the bot is an admin
    const botIsNotAdmin = (yield (0, Helper_1.checkBotIsAdmin)(chat, client)) === false;
    if (botIsNotAdmin)
        return;
    const mentionedContacts = yield message.getMentions();
    const mentionedIds = [];
    for (const contact of mentionedContacts) {
        if (contact.isMe) {
            message.reply("*Hey!! Don't kick me!!. Hmpph ><*");
            return;
        }
        mentionedIds.push(contact.id._serialized);
    }
    chat.removeParticipants(mentionedIds);
});
exports.default = RemoveMember;
