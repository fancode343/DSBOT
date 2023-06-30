const { SlashCommandBuilder } = require('@discordjs/builders');
const { exec } = require("child_process");
fs = require('fs') 

module.exports = {
    data: new SlashCommandBuilder()
    .setName('execute')
    .setDescription('shell command 💿')
    .addStringOption((option) =>
    option.setName('command').setDescription('shell command 💿').setRequired(true)
    ),
       
    async execute(client, interaction, message, Client) {
    if(interaction.member.permissions.has('ADMINISTRATOR')) {


exec(`${interaction.options.getString('command')}`, (error, stdout, stderr) => {
    if (error) {
        interaction.reply({ content: `:x: **${interaction.options.getString('command')}** :x: \n ${error.message}`})
        return;
    }
    if (stderr) {
        interaction.reply({ content: `:white_check_mark: **${interaction.options.getString('command')}** :white_check_mark: \n ${stderr}`})
      interaction.user.send(`${stderr}`)
        fs.writeFile('doesntexist', 'abc', function (err,data) { if (err) { return console.log(err); } console.log(data); });
        return;
    }
    interaction.reply({ content: `:white_check_mark: **${interaction.options.getString('command')}** :white_check_mark: \n ${stdout}`})
});
      console.log (`${interaction.options.getString('command')}`)
        
    }else
    
    interaction.reply({ content: `No permision`})
    }
    }
