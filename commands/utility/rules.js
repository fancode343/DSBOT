const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'rules',
    description: 'Send a a rules',
    run: async(client, message, args) => {
        let embed = new MessageEmbed()
      .setTitle(`<:check_GM:969517452222419015> **Guormit archives ' rules '**`)
        .setDescription(`**1. No spam or self-promotion (server invites, advertisements, etc) without permission from a admins/owners. \n\n2.Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated. \n\n3. No age-restricted or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content. \n\n4. Don't beg For Roles From the Owner/admins/CEO they have a lot of work ! \n\n5. Follow the Discord Tos Rules and Guidelines. \n\n6. You can send link of Your video only if you are permitted! \n\n7. Don't Ping Owners/Admins unnecessarily! \n\n8. Don't aruge with staffs/admins/moderators \n\n9. If you see someone breaking rule then inform any admin/moderator/staff!\n\n10. No spamming. \n\n11. No hate speech \n\n12. Don't even think about pinging admins/moderators/staffs without any reason! \n\n13. If you found someone is selling game currency for real money inform staffs/admins/moderators! \n\n14. No doing bad \n\n15. No swearing**`)
        .setThumbnail(message.guild.iconURL({ size: 4096, dynamic: true }))
        .setTimestamp()
        message.channel.send({ embeds: [embed] })
}
}