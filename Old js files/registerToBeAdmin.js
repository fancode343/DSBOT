const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('register-to-admin')
    .setDescription('request for pending admins')
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
option.setName('wywtba')
    .setDescription('why do you want to become admin')
    .setRequired(true)
                   )

      .addStringOption((option) =>
option.setName('how-you-will-manage')
    .setDescription('how to will manage the server if granguorgemc is offline')
    .setRequired(true)
                   )

      .addStringOption((option) =>
option.setName('how-to-prevent-hackers')
    .setDescription('how you will prevent the hackers')
    .setRequired(true)
              )
      .addStringOption((option) =>
option.setName('rank-apply')
    .setDescription('choose - moderator, sub moderator, helper')
    .setRequired(true)
              ),
  
  
                                     
    async execute(client, interaction, message, Client) {


if(interaction.member.permissions.has('READ_MESSAGE_HISTORY')) {


        interaction.reply({ content: `**The application was sent to GranGuorgeMC \nwait until GranGuorgeMC aprove your application-form** \n\n**Name:** ${[interaction.options.getString('name')]}   \n**Gamertag:**  ${[interaction.options.getString('gamertag')]} \n**Age:** ${[interaction.options.getString('age')]} \n**Gender:** ${[interaction.options.getString('gender')]} \n**Language:** ${[interaction.options.getString('language')]} \n**Minecraft experience:** ${[interaction.options.getString('minecraft-experience')]} \n**know-toolbox:** ${[interaction.options.getString('toolbox')]}  \n**wywtba:** ${[interaction.options.getString('wywtba')]}  \n**mange:** ${[interaction.options.getString('how-you-will-manage')]}  \n**prevent:** ${[interaction.options.getString('how-to-prevent-hackers')]} \n**rank:** ${[interaction.options.getString('rank-apply')]}`})

      let botChannel = "1064564407180472351";
  client.channels.cache.get(botChannel).send(`${interaction.user} \n**Name:** ${[interaction.options.getString('name')]}   \n**Gamertag:**  ${[interaction.options.getString('gamertag')]} \n**Age:** ${[interaction.options.getString('age')]} \n**Gender:** ${[interaction.options.getString('gender')]} \n**Language:** ${[interaction.options.getString('language')]} \n**Minecraft experience:** ${[interaction.options.getString('minecraft-experience')]} \n**know-toolbox:** ${[interaction.options.getString('toolbox')]} \n**wywtba:** ${[interaction.options.getString('wywtba')]}  \n**mange:** ${[interaction.options.getString('how-you-will-manage')]}  \n**prevent:** ${[interaction.options.getString('how-to-prevent-hackers')]} \n**rank:** ${[interaction.options.getString('rank-apply')]}`)

                                        interaction.user.send(`${interaction.user} \n**Your application form was sent to GranGuorgeMC, so please wait**\n\n**Name:** ${[interaction.options.getString('name')]}   \n**Gamertag:**  ${[interaction.options.getString('gamertag')]} \n**Age:** ${[interaction.options.getString('age')]} \n**Gender:** ${[interaction.options.getString('gender')]} \n**Language:** ${[interaction.options.getString('language')]} \n**Minecraft experience:** ${[interaction.options.getString('minecraft-experience')]} \n**know-toolbox:** ${[interaction.options.getString('toolbox')]}  \n**wywtba:** ${[interaction.options.getString('wywtba')]}  \n**mange:** ${[interaction.options.getString('how-you-will-manage')]}  \n**prevent:** ${[interaction.options.getString('how-to-prevent-hackers')]} \n**rank:** ${[interaction.options.getString('rank-apply')]}`)
        
    }else
    interaction.reply({ content: `You din't read the  <#870893251220111401>. read <#870893251220111401>  first and tap the ✅ before you run this command`})

  }
}
