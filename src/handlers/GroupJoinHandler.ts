import { GroupNotification } from 'whatsapp-web.js'

import config from '../config/config.json'
import emoji from '../config/emoji.json'
import { findAffectedContact, getContactName } from '../helper/Helper'

/**
 * This function is used to handler notification when someone is joined the group
 * @param {any} notification:GroupNotification
 * @returns {any}
 */
const GroupJoinHandler = async (
  notification: GroupNotification,
): Promise<void> => {
  const contacts = await notification.getRecipients()
  const contact = findAffectedContact(contacts)
  const contactName = getContactName(contact)

  const contactMe = contact ?? contacts[0]
  if (contactMe?.isMe) {
    notification.reply(
      `*Hello Master. My name is ${config.BOT_NAME}, i can do a lot of things for you~.*\n\n*To understand what kind of things that i can do, just type .help in the chat.*\n\n*Nice to meet you Master!! ${emoji.happy}*`,
    )
    return
  }

  notification.reply(`_A wild *${contactName ?? 'Anomymous'}* appeared._`)
}

export default GroupJoinHandler
