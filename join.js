const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const fs = require('fs')
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

module.exports = client;

const dotenv = require('dotenv')
const envFile = dotenv.config()
const config = require('./config.json')
const prefix = config.prefix
const token = process.env['token']


client.on("ready", () => {
  console.log(`Join.js - Ready`) 
    client.channels.cache.get('974183688940187669').send(`**Join.js** - Ready`)
  client.on('guildMemberAdd', member => {
client.channels.cache.get('1118377998979182623').send(`**${member.user.username}** \n Joined the Guormit'Archives!!`)
})
})
      

client.login(token)