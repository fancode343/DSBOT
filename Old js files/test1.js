const { SlashCommandBuilder } = require('@discordjs/builders');
const { createPool } = require('mysql');
const pool = createPool({
  // connections
  host: "sql.freedb.tech",
  user: "freedb_granguorge",
  password: "ZAEVtm8bz%N&VT?",
  database: "freedb_Granguorge",
  connectionLimit: 5,
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName('insert')
    .setDescription('insert data')
    .addStringOption((option) =>
      option.setName('name').setDescription('NAME').setRequired(true)
    )
    .addStringOption((option) =>
      option.setName('user').setDescription('USER').setRequired(true)
    )
    .addStringOption((option) =>
      option.setName('usi').setDescription('USI').setRequired(true)
    ),

  async execute(client, interaction, message, args) {
    if (interaction.member.permissions.has('ADMINISTRATOR')) {
      try {
        // First pool: inserting data into the database
        pool.query(
          `INSERT INTO users (name, \`user\`, usi) VALUES ('${interaction.options.getString(
            'name'
          )}', '${interaction.options.getString('user')}', '${interaction.options.getString('usi')}')`,
          function (err, result, fields) {
            if (err) {
              throw new Error(`Database error - ${err.message}`);
            }
            console.log(result);
          }
        );

        // Another pool: getting the id of the user
        pool.query(
          `SELECT * FROM users WHERE usi = ?`,
          [interaction.options.getString('usi')],
          function (err, result, fields) {
            if (err) {
              throw new Error(`Database error - ${err.message}`);
            }
            if (result.length === 0) {
              interaction.reply({ content: `**Done. Your ID is (DATABASE ERROR)**` });
              return;
            }
            let id = result[0].id;
            interaction.reply({ content: `**Done. Your ID is ${id}**` });
          }
        );
      } catch (err) {
        if (err.code === 'ECONNREFUSED') {
          console.log('Connection refused - unable to connect to the database');
          interaction.reply({ content: `Database connection error. Please try again later.` });
        } else if (err.message.startsWith('Database error')) {
          console.log(err.message);
          interaction.reply({ content: err.message });
        } else {
          console.log('Unknown error occurred:', err);
          interaction.reply({ content: `An error occurred. Please try again later.` });
        }
      }
    } else {
      interaction.reply({ content: `No permission` });
    }
  },
};
