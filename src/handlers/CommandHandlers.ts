import WAWebJS from 'whatsapp-web.js'

import About from '../commands/About'
import GenerateWaifu from '../commands/GenerateWaifu'
import RemoveMember from '../commands/group/RemoveMember'
import TagAll from '../commands/group/TagAll'
import Sticker from '../commands/Sticker'
import HelpReply from '../replies/HelpReply'

/**
 * This function is used to define every command for the bot
 * @param {any} message:WAWebJS.Message
 * @param {any} client:WAWebJS.Client
 * @returns {any}
 */
const CommandHandlers = async (
  message: WAWebJS.Message,
  client: WAWebJS.Client,
) => {
  const messageBody = message.body.toLowerCase().trim()
  if (messageBody === '.help') {
    message.reply(HelpReply)
  } else if (messageBody === '.tagall') {
    TagAll(message, client)
  } else if (messageBody === '.waifu') {
    GenerateWaifu(message)
  } else if (messageBody === '.sticker') {
    Sticker(message)
  } else if (messageBody.includes('.kick')) {
    RemoveMember(message, client)
  } else if (messageBody === '.about') {
    About(message)
  }
}

export default CommandHandlers
