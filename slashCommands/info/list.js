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
    .setName('list')
    .setDescription('list members'),

  async execute(client, interaction, message, args) {
    if (interaction.member.permissions.has('ADMINISTRATOR')) {
      pool.query(`SELECT username, email, user_id FROM MCDISC`, function(err, result, fields) {
        if (err) {
          console.log(err);
          return;
        }

        if (result.length === 0) {
          // No users found
          interaction.reply({ content: `No users found.` });
        } else {
          let userList = '';
          result.forEach(row => {
            userList += `**Gamertag:** ${row.username}\n**Email:** ${row.email}\n**UserID:** ${row.user_id}\n\n`;
          });

          interaction.reply({ content: userList });
        }
      });
    } else {
      interaction.reply({ content: `No permission` });
    }
  },
};
