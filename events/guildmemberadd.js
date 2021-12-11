const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("guildMemberAdd", async (member) => {

    let canal = bot.channels.get('705880720756703345')
    let entrada = new discord.RichEmbed()
    //.setTitle()
    //.setAuthor('👤 Novo membro!')
    .setThumbnail(member.user.avatarURL)
    .setDescription(`Bem-vindo/a ${member} ao servidor, esperemos que goste!\nConsigo já somos ` + member.guild.memberCount + ` membros!`)
    .addField('<:29:703986331247837295> Loja do servidor', `[SplekMC.tk](https://SplekMC.tk)`)
    .addField('<:35:703989032274886706> Ip do servidor', 'jogar-splekmc.tk')
    .setColor('RANDOM')
    .setFooter('Bot feito pela Francisca.105#8965')

    canal.send(entrada)
//member.guild.memberCount
})