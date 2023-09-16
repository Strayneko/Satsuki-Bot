import WAWebJS from 'whatsapp-web.js'

/**
 * Tag all members in the group
 * @param {any} message:WAWebJS.Message
 * @param {any} client:WAWebJS.Client
 * @returns {any}
 */
const TagAll = async (message: WAWebJS.Message, client: WAWebJS.Client) => {
  const chat: any = await message.getChat()
  if (!chat?.isGroup) {
    chat.sendMessage('*This feature only applicable in group chat.*')
    return
  }

  let text = 'Hello guys~ \n\n'
  const mentions = []

  for (const participant of chat.participants) {
    const contact = await client.getContactById(participant.id._serialized)

    const contactIsNotMe = !contact.isMe
    if (contactIsNotMe) {
      mentions.push(contact.id._serialized)
      text += `@${participant.id.user} \n`
    }
  }

  // remove space on the end of message
  text = text.substring(0, text.lastIndexOf(' '))
  await chat.sendMessage(text, { mentions })
}

export default TagAll
