module.exports = {
    name: 'website',
    description: 'Send a link',
    run: async(client, message, args) => {
        let msg;
        let textchannel = message.mentions.channels.first() //find the channel you mention in the cmd
        if(!message.member.permissions.has('MANAGE_MESSAGES')) { //need manager messages permission to prevent people use this cmd wrong
        return message.reply ('http://guormit.cf')
        }else{
            message.channel.send('**Sent privately**')//then send to your message channel
            message.author.send('**Here the link** \nhttp://guormit.cf/admin')
        } 
      }
   }
        