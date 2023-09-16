"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const whatsapp_web_js_1 = require("whatsapp-web.js");
const CommandHandlers_1 = __importDefault(require("./handlers/CommandHandlers"));
const GroupJoinHandler_1 = __importDefault(require("./handlers/GroupJoinHandler"));
const GroupLeaveHandler_1 = __importDefault(require("./handlers/GroupLeaveHandler"));
const client = new whatsapp_web_js_1.Client({
    authStrategy: new whatsapp_web_js_1.LocalAuth(),
});
client.on('qr', (qr) => {
    qrcode_terminal_1.default.generate(qr, { small: true });
});
client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', (message) => (0, CommandHandlers_1.default)(message, client));
client.on('group_join', GroupJoinHandler_1.default);
client.on('group_leave', GroupLeaveHandler_1.default);
client.initialize();
