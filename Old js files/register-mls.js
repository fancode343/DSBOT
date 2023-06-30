const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('register-mls')
    .setDescription('request for pending members')
    .addStringOption((option) =>
option.setName('name').setDescription('Enter your first real name').setRequired(true)
                     )
      .addStringOption((option) =>
option.setName('gamertag').setDescription('Enter Minecraft Gamertag').setRequired(true)

                       )
      .addStringOption((option) =>
option.setName('age').setDescription('Your age').setRequired(true)

                       )
  .addStringOption((option) =>
option.setName('gender')
    .setDescription('Your gender')
    .setRequired(true)
                   )

      .addStringOption((option) =>
option.setName('language')
    .setDescription('Your language')
    .setRequired(true)
                   )

      .addStringOption((option) =>
option.setName('minecraft-experience')
    .setDescription('Your minecraft experience')
    .setRequired(true)
                   )

      .addStringOption((option) =>
option.setName('toolbox')
    .setDescription('do you know what toolbox is?')
    .setRequired(true)
                   )

      .addStringOption((option) =>
option.setName('why-do-you-want-to-join')
    .setDescription('why do you want to join?')
    .setRequired(true)
                   ),
                       


                       
           



                                     
    async execute(client, interaction, message, Client) {

if(interaction.member.permissions.has('MANAGE_MESSAGES')) {

  interaction.reply({ content: `bruh, your an co-owner or moderator or helper`})

}else if (interaction.member.permissions.has('SPEAK')) {

  interaction.reply({ content: `bruh, your already allowlisted`})

}else if(interaction.member.permissions.has('MANAGE_MESSAGES')) {


        interaction.reply({ content: `**The application was sent to the admins \nwait until admins aprove your application-form** \n\n**Name:** ${[interaction.options.getString('name')]}   \n**Gamertag:**  ${[interaction.options.getString('gamertag')]} \n**Age:** ${[interaction.options.getString('age')]} \n**Gender:** ${[interaction.options.getString('gender')]} \n**Language:** ${[interaction.options.getString('language')]} \n**Minecraft experience:** ${[interaction.options.getString('minecraft-experience')]} \n**know-toolbox:** ${[interaction.options.getString('toolbox')]}  \n**wdywtj:** ${[interaction.options.getString('why-do-you-want-to-join')]} `})

      let botChannel = "997146066589843488";
  client.channels.cache.get(botChannel).send(`${interaction.user} \n**Name:** ${[interaction.options.getString('name')]}   \n**Gamertag:**  ${[interaction.options.getString('gamertag')]} \n**Age:** ${[interaction.options.getString('age')]} \n**Gender:** ${[interaction.options.getString('gender')]} \n**Language:** ${[interaction.options.getString('language')]} \n**Minecraft experience:** ${[interaction.options.getString('minecraft-experience')]} \n**know-toolbox:** ${[interaction.options.getString('toolbox')]}  \n**wdywtj:** ${[interaction.options.getString('why-do-you-want-to-join')]}`)

                                        interaction.user.send(`${interaction.user} \n**Your application form was sent to the admins, so please wait**\n\n**Name:** ${[interaction.options.getString('name')]}   \n**Gamertag:**  ${[interaction.options.getString('gamertag')]} \n**Age:** ${[interaction.options.getString('age')]} \n**Gender:** ${[interaction.options.getString('gender')]} \n**Language:** ${[interaction.options.getString('language')]} \n**Minecraft experience:** ${[interaction.options.getString('minecraft-experience')]} \n**know-toolbox:** ${[interaction.options.getString('toolbox')]}  \n**wdywtj:** ${[interaction.options.getString('why-do-you-want-to-join')]}`)
        
    }else
    interaction.reply({ content: ` THE SERVER NOT OPENED YET`})

  }
}
