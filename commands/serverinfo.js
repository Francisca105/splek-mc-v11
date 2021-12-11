exports.run = (client, message, args, err) => {
    const discord = require('discord.js')
    const moment = require('moment')
    moment.locale('pt-br')

    let guild = message.guild
    const region = {
        brazil: ':flag_br: Brazil',
        portugal: ':flag_pt: Portugal'
      }

    let sv = new discord.RichEmbed()
    .setTitle(guild.name)
    .setThumbnail(guild.iconURL)
    .setDescription('Todas as informações do servidor!')
    .addField('Membros:', guild.members.size)
    .addField('Dono:', guild.owner)
    .addField('Id:', guild.id)
    .addField('Região:', region[guild.region])
    .addField('Cargos:', guild.roles.size)
    .addField('Canais:', guild.channels.size)
    .addField('Criado em:', moment(guild.createdAt).format('LLLL') )
    .addField('Entras-te em:', moment(guild.joinedAt).format('LLLL') )
    .setColor('#10c77e')

    message.channel.send(sv).then(s => s.react('703974118294290488'))

}
module.exports.help = {
    name: "serverinfo",
    aliases: ["discord", "servidorinfo", "svinfo"]
}