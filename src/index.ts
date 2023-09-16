import qrcode from 'qrcode-terminal'
import WAWebJS, { Client, LocalAuth } from 'whatsapp-web.js'

import CommandHandlers from './handlers/CommandHandlers'
import GroupJoinHandler from './handlers/GroupJoinHandler'
import GroupLeaveHandler from './handlers/GroupLeaveHandler'

const client = new Client({
  authStrategy: new LocalAuth(),
})

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('message', (message: WAWebJS.Message) =>
  CommandHandlers(message, client),
)

client.on('group_join', GroupJoinHandler)
client.on('group_leave', GroupLeaveHandler)

client.initialize()
