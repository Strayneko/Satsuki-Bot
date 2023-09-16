import { Contact, GroupNotification } from 'whatsapp-web.js'

import { findAffectedContact, getContactName } from '../helper/Helper'

/**
 * With this function, you can handle group notifcation when some one left the group chat
 * @param {any} notification:GroupNotification
 * @returns {any}
 */
const GroupLeaveHandler = async (notification: GroupNotification) => {
  const contacts = await notification.getRecipients()
  const contact: Contact | null | undefined = findAffectedContact(contacts)

  const contactName = getContactName(contact)

  notification.reply(`_*${contactName}* left the game._`)
}

export default GroupLeaveHandler
