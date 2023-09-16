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
const TagAll = (message, client) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield message.getChat();
    if (!(chat === null || chat === void 0 ? void 0 : chat.isGroup)) {
        chat.sendMessage('*This feature only applicable in group chat.*');
        return;
    }
    let text = 'Hello guys~ \n\n';
    const mentions = [];
    for (const participant of chat.participants) {
        const contact = yield client.getContactById(participant.id._serialized);
        const contactIsNotMe = !contact.isMe;
        if (contactIsNotMe) {
            mentions.push(contact.id._serialized);
            text += `@${participant.id.user} \n`;
        }
    }
    // remove space on the end of message
    text = text.substring(0, text.lastIndexOf(' '));
    yield chat.sendMessage(text, { mentions });
});
exports.default = TagAll;
