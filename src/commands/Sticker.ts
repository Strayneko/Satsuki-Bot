import WAWebJS from 'whatsapp-web.js'

import config from '../config/config.json'
import emoji from '../config/emoji.json'

/**
 * Read image from the message and send it back as sticker
 * @param {any} message:WAWebJS.Message
 * @returns {any}
 */
const Sticker = async (message: WAWebJS.Message) => {
  const chat = await message.getChat()

  if (!message.hasMedia) {
    chat.sendMessage(
      `*Master, please give ${config.BOT_NAME} an image, so that ${config.BOT_NAME} can give you a cute sticker! ${emoji.dissapointed}*`,
    )
    return
  }

  chat.sendMessage(
    `*Please wait..., ${config.BOT_NAME} is generating sticker for Master. ${emoji.exited}*`,
  )
  const media = await message.downloadMedia()

  message.reply(media, message.from, {
    sendMediaAsSticker: true,
    stickerName: config.DEFAULT_STICKER_NAME,
    stickerAuthor: config.DEFAULT_STICKER_AUTHOR,
  })
}

export default Sticker
