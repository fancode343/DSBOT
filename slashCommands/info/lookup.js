const { SlashCommandBuilder } = require('@discordjs/builders');
const { createPool } = require('mysql');
const pool = createPool({
  host: "sql.freedb.tech",
  user: "freedb_granguorge",
  password: "ZAEVtm8bz%N&VT?",
  database: "freedb_Granguorge",
  connectionLimit: 5,
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName('lookup')
    .setDescription('lookup members')
    .addStringOption((option) =>
      option.setName('userid').setDescription('ID').setRequired(true)
    ),

  async execute(client, interaction, message, args) {
    if (interaction.member.permissions.has('ADMINISTRATOR')) {
      pool.query(`SELECT * FROM MCDISC WHERE user_id = ?`, [interaction.options.getString('userid')], function(err, result, fields) {
        if (err) {
          console.log(err);
          return;
        }
        
        if (result.length === 0) {
          // ID number doesn't exist
          interaction.reply({ content: `userid number not found.` });
        } else {
          let id = result[0].id;
          let usernumber = result[0].user_id;
          let gamertag = result[0].username;
          let email = result[0].email;
          let age = result[0].age;
          let gender = result[0].gender;
          let wdywtj = result[0].wdywtj;
          let mcv = result[0].phoneCode;
          let fbprof = result[0].fbprof;
          let dsnm = result[0].dsnm;

          console.log(result);

          interaction.reply({ content: `**Gamertag:** ${gamertag} \n**User_Number:** ${usernumber} \n**Age:** ${age} \n**Email:** ${email} \n**Gender:** ${gender} \n**WDYWTJ:** ${wdywtj} \n**Minecraft-Version:** ${mcv} \n**FB-Profile:** ${fbprof} \n**Date-register:** no. \n**Discord:** ${dsnm}` });
        }
      });
    } else {
      interaction.reply({ content: `No permission` });
    }
  },
};
