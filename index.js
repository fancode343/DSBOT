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
    console.log(`${client.user.tag} is ready!`)
client.channels.cache.get('974183688940187669').send(`**Code is login** to ${client.user.tag}`)
const site = require('./web.js');
const leave = require('./leave');
const join = require('./join.js')
    
    const actvs = [
        `| my-prefix - ${prefix}`,
        `| ${client.channels.cache.size} channels`,
        `| ${client.users.cache.size} users`,
        `| ${client.guilds.cache.size} servers`,
    ]

    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'COMPETING' });
        setInterval(() => {
            client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'COMPETING' });
    }, 5000);

    client.user.setStatus('online')

    
});



//new collections
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

client.categories = fs.readdirSync('./commands');

//load the files
['command'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});

//slash commands
client.slashCommands = new Collection();

['slashCommand'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});


//snipe map
client.snipes = new Map() //create a new map
client.on('messageDelete', function(message, channel) {
    client.snipes.set(message.channel.id, { //get the channel of message
        content: message.content, //snipe the message that was deleted
        author: message.author.id, //get the message author the the deleted message
        image: message.attachments.first() ? message.attachments.first().proxyURL : null //get the deleted image if there is one
    })
})

//We will move our token from config.json to .env
client.login(token)
