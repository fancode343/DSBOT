const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping me'),

      
  async execute(client, interaction, message, Client) {

if(interaction.member.permissions.has('READ_MESSAGE_HISTORY')) {


  interaction.reply({ content: `pong`, })

    }
}
}