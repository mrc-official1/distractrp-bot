const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: '162.55.241.186',
    port: 12723,
    username: 'DistractBot',
    version: '1.20.1'
  })

  bot.on('login', () => {
    console.log('Bot Logged In')
  })

  bot.on('spawn', () => {
    console.log('Bot Joined Server')

    setInterval(() => {
      bot.setControlState('forward', true)

      setTimeout(() => {
        bot.setControlState('forward', false)
      }, 2000)
    }, 10000)
  })

  bot.on('end', () => {
    console.log('Disconnected - Reconnecting in 5s...')
    setTimeout(createBot, 5000)
  })

  bot.on('kicked', (reason) => {
    console.log('Kicked:', reason)
  })

  bot.on('error', (err) => {
    console.log('Error:', err.message)
  })
}

createBot()
