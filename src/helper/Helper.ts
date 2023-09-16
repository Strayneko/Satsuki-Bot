import { Client, Contact, GroupParticipant } from 'whatsapp-web.js'

import config from '../config/config.json'

export const findAffectedContact = (contacts: Contact[]) => {
  return contacts.find((contact: Contact) => !contact.isMe)
}

export const getContactName = (
  contact: Contact | undefined,
): string | undefined => {
  const contactHasNoName =
    contact?.pushname === undefined || contact?.pushname.length === 0

  return contactHasNoName ? contact?.number : contact?.pushname
}

// to check whether the bot is an admin
export const checkBotIsAdmin = async (
  chat: any,
  client: Client,
): Promise<boolean> => {
  const participants: GroupParticipant[] = chat.participants

  for (const participant of participants) {
    const contact = await client.getContactById(participant.id._serialized)

    if (contact.isMe && !participant.isAdmin) {
      chat.sendMessage(
        `*Master, please forgive me ${config.BOT_NAME} is not Admin. So that, ${config.BOT_NAME} can't full fill your order. (╥_╥)*`,
      )
      return false
    }
  }

  return true
}
