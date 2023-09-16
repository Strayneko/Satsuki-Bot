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
exports.checkBotIsAdmin = exports.getContactName = exports.findAffectedContact = void 0;
const config_json_1 = __importDefault(require("../config/config.json"));
const findAffectedContact = (contacts) => {
    return contacts.find((contact) => !contact.isMe);
};
exports.findAffectedContact = findAffectedContact;
const getContactName = (contact) => {
    const contactHasNoName = (contact === null || contact === void 0 ? void 0 : contact.pushname) === undefined || (contact === null || contact === void 0 ? void 0 : contact.pushname.length) === 0;
    return contactHasNoName ? contact === null || contact === void 0 ? void 0 : contact.number : contact === null || contact === void 0 ? void 0 : contact.pushname;
};
exports.getContactName = getContactName;
// to check whether the bot is an admin
const checkBotIsAdmin = (chat, client) => __awaiter(void 0, void 0, void 0, function* () {
    const participants = chat.participants;
    for (const participant of participants) {
        const contact = yield client.getContactById(participant.id._serialized);
        if (contact.isMe && !participant.isAdmin) {
            chat.sendMessage(`*Master, please forgive me ${config_json_1.default.BOT_NAME} is not Admin. So that, ${config_json_1.default.BOT_NAME} can't full fill your order. (╥_╥)*`);
            return false;
        }
    }
    return true;
});
exports.checkBotIsAdmin = checkBotIsAdmin;
