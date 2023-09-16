import config from '../config/config.json'
import emoji from '../config/emoji.json'

const WaifuReply = {
  failed: `*Please forgive me, ${config.BOT_NAME} is failed to get a waifu for Master. But don't worry ${config.BOT_NAME} will try the best next time!*\n*${emoji.dissapointed}*`,
  preFetch: `*Please wait..., ${config.BOT_NAME} is getting a perfect waifu for Master~ ${emoji.happy}*`,
}
export default WaifuReply
