const { Client, Message } = require('discord.js');
const { exec } = require("child_process"); 

module.exports = {
    name: 'info',
    description: 'bot info',
    run: async(client, message, args) => {
        const msg = await message.channel.send('hmmmm...')
        await msg.edit(`**fine..**`)
      msg.edit(`**A**`)
      msg.edit(`**AM**`)
      msg.edit(`**AMB**`)
      msg.edit(`**AMBO**`) 
      msg.edit(`**AMBOT**`)
      msg.edit(`**AMBOT **`)
      msg.edit(`**AMBOT O**`)
      msg.edit(`**AMBOT OY**`)
    }
}
