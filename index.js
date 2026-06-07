const mineflayer = require('mineflayer')

function createBot() {

const bot = mineflayer.createBot({
  host: '162.55.241.186',
  port: 12733,
  username: 'DistractBot',
  version: '1.20.1'
})

bot.on('spawn', () => {
  console.log('Bot Joined')

  setInterval(() => {

    bot.setControlState('forward', true)

    setTimeout(() => {
      bot.setControlState('forward', false)
    }, 2000)

  }, 10000)
})

bot.on('end', () => {
  console.log('Reconnecting...')
  setTimeout(createBot, 5000)
})

bot.on('error', console.log)
}

createBot()
