const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('anounce')
    .setDescription('anouncement')
    .addStringOption((option) =>
option.setName('anounce').setDescription('text').setRequired(true)
                     ),

  async execute(client, interaction, message, Client) {

if(interaction.member.permissions.has('MANAGE_MESSAGES')) {

  interaction.reply({ content: `Done`})

  let botChannel = "871025835119874088";
  client.channels.cache.get(botChannel).send(`${[interaction.options.getString('anounce')]} **\n\nby:** ${interaction.user}`)

}else
  interaction.reply({ content: `bruh, your not allowed to use this command`, ephemeral: true })

    }
}