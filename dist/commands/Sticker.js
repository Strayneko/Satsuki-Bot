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
const Sticker = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield message.getChat();
    if (!message.hasMedia) {
        chat.sendMessage(`*Master, please give ${config_json_1.default.BOT_NAME} an image, so that ${config_json_1.default.BOT_NAME} can give you a cute sticker! ${emoji_json_1.default.dissapointed}*`);
        return;
    }
    chat.sendMessage(`*Please wait..., ${config_json_1.default.BOT_NAME} is generating sticker for Master. ${emoji_json_1.default.exited}*`);
    const media = yield message.downloadMedia();
    message.reply(media, message.from, {
        sendMediaAsSticker: true,
        stickerName: config_json_1.default.DEFAULT_STICKER_NAME,
        stickerAuthor: config_json_1.default.DEFAULT_STICKER_AUTHOR,
    });
});
exports.default = Sticker;
