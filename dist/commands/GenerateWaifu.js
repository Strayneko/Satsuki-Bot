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
const whatsapp_web_js_1 = require("whatsapp-web.js");
const config_json_1 = __importDefault(require("../config/config.json"));
const waifu_pics_categories_json_1 = __importDefault(require("../config/waifu_pics_categories.json"));
const WaifuReply_1 = __importDefault(require("../replies/WaifuReply"));
const GenerateWaifu = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const category = getRandomCategory();
    const chat = yield message.getChat();
    message.reply(WaifuReply_1.default.preFetch);
    try {
        const response = yield fetch(config_json_1.default.WAIFU_PICS_URL + category);
        const jsonResponse = yield response.json();
        const imageUrl = jsonResponse.url;
        if (!response.ok) {
            console.error(yield response.text());
            chat.sendMessage(WaifuReply_1.default.failed);
            return;
        }
        const image = yield whatsapp_web_js_1.MessageMedia.fromUrl(imageUrl);
        chat.sendMessage(image);
    }
    catch (e) {
        console.error(e);
        chat.sendMessage(WaifuReply_1.default.failed);
    }
});
const getRandomCategory = () => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * waifu_pics_categories_json_1.default.sfw.length);
    // get random item
    const item = waifu_pics_categories_json_1.default.sfw[randomIndex];
    return item;
};
exports.default = GenerateWaifu;
