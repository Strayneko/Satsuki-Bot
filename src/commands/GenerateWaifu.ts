import WAWebJS, { MessageMedia } from 'whatsapp-web.js'

import config from '../config/config.json'
import categories from '../config/waifu_pics_categories.json'
import WaifuReply from '../replies/WaifuReply'
import WaifuPicsResponse from '../types/WaifuPicsResponse.d'

/**
 * To get a random image frowm waifu pics API and send it to the chat
 * @param {any} message:WAWebJS.Message
 * @returns {any}
 */
const GenerateWaifu = async (message: WAWebJS.Message) => {
  const category: string = getRandomCategory()
  const chat = await message.getChat()
  message.reply(WaifuReply.preFetch)

  try {
    const response: Response = await fetch(config.WAIFU_PICS_URL + category)
    const jsonResponse: WaifuPicsResponse = await response.json()
    const imageUrl = jsonResponse.url

    if (!response.ok) {
      console.error(await response.text())
      chat.sendMessage(WaifuReply.failed)
      return
    }

    const image = await MessageMedia.fromUrl(imageUrl)
    chat.sendMessage(image)
  } catch (e) {
    console.error(e)
    chat.sendMessage(WaifuReply.failed)
  }
}

/**
 * This function is used to generate random category for Waifu pics API
 * @returns {string}
 */
const getRandomCategory = (): string => {
  // get random index value
  const randomIndex = Math.floor(Math.random() * categories.sfw.length)

  // get random item
  const item = categories.sfw[randomIndex]

  return item
}

export default GenerateWaifu
