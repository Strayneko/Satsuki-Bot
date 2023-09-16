import WAWebJS from 'whatsapp-web.js'

import config from '../../config/config.json'
import emoji from '../../config/emoji.json'
import { checkBotIsAdmin } from '../../helper/Helper'

/**
 * To remove mentioned user from the group chat
 * @param {any} message:WAWebJS.Message
 * @param {any} client:WAWebJS.Client
 * @returns {any}
 */
const RemoveMember = async (
  message: WAWebJS.Message,
  client: WAWebJS.Client,
) => {
  const messageBody: string = message.body.trim().split(' ')[0].trim()
  if (messageBody !== '.kick') return

  const chat: any = await message.getChat()
  if (!chat.isGroup) {
    chat.sendMessage(
      `*Master ${config.BOT_NAME} can't complete your order, because we're not in the group chat. ${emoji.sad}*`,
    )
    return
  }

  // to check whether the bot is an admin
  const botIsNotAdmin: boolean = (await checkBotIsAdmin(chat, client)) === false
  if (botIsNotAdmin) return

  const mentionedContacts = await message.getMentions()
  const mentionedIds = []

  for (const contact of mentionedContacts) {
    if (contact.isMe) {
      message.reply("*Hey!! Don't kick me!!. Hmpph ><*")
      return
    }
    mentionedIds.push(contact.id._serialized)
  }
  chat.removeParticipants(mentionedIds)
}

export default RemoveMember
