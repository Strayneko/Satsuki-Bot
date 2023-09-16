import { Message } from 'whatsapp-web.js'

import config from '../config/config.json'

/**
 * To show Bot About information
 * @param {any} message:Message
 * @returns {any}
 */
const About = (message: Message) => {
  message.reply(
    `*My Name is ${config.BOT_NAME}, i'm a maid that can help you do a lot of fun things!*\n\n*My creator name is Rendi Bayu Setiawan. He's a full-stack web developer, he really love to do programming things.*\n\n*Here is his contacts:*\n*Github: https://github.com/strayneko*\n*Whatsapp: +6287836722420*`,
  )
}

export default About
