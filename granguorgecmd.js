const { Client, Message, MessageEmbed, Collection } = require('discord.js')
const { exec } = require("child_process");
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
  console.log(`GranGuorgeCMD -  Ready`)
client.channels.cache.get('974183688940187669').send(`**GranGuorgeCMd.js** - Ready`)
client.on("message", message => {

if(message.content.toLowerCase() === 'guormit')
		message.reply("**Archives**!")
	else if(message.content.toLowerCase().includes('why granguorgemc sad'))
	{
		message.reply('because Claire dosent like him')
	}
if(message.content.toLowerCase().includes('why granguorgemc is sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content.toLowerCase().includes('why granguorge is sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content.toLowerCase().includes('why gran sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content.toLowerCase().includes('why granguorge sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content.toLowerCase().includes('granguorgemc is sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content.toLowerCase().includes('granguorge is sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content.toLowerCase().includes('gran is sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content.toLowerCase().includes('gran sad'))
	{
		message.reply('because Claire dosent like him')
  }
  if(message.content === '<@1007500604526039112>') {
    message.reply ('what!!')
  }
if(message.content.toLowerCase().includes('why arghost is sad'))
	{
		message.reply('arghost is not sad')
  }
  if(message.content ==="create") {
    exec(`printf "lol" > players/the.js`)
    message.reply('ahha')
  }
  if (message.content.startsWith(`Create folder`)) {
 let args = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.channel.send("Hey! To suggest something to create!")

message.channel.send(args.join(" ")).then (sentMessage => {
 sentMessage.react("✅")
 sentMessage.react("❌")
  
 })
 message.channel.send("Your file has been succesfully been sent. ")
  .then(message => 
 message.delete({timeout: 10000}))
 message.react("✅")
  message.delete({timeout: 1000})
    

}
})
})
      

client.login(token)