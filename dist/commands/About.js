"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("../config/config.json"));
const About = (message) => {
    message.reply(`*My Name is ${config_json_1.default.BOT_NAME}, i'm a maid that can help you do a lot of fun things!*\n\n*My creator name is Rendi Bayu Setiawan. He's a full-stack web developer, he really love to do programming things.*\n\n*Here is his contacts:*\n*Github: https://github.com/strayneko*\n*Whatsapp: +6287836722420*`);
};
exports.default = About;
