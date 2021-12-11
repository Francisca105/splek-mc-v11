exports.run = async (client, message) => {
    const discord = require('discord.js')
    let embed = new discord.RichEmbed()
    .setTitle('<:16:703981957171642429> Ajuda')
    .setDescription('Todos os meus comandos:\n\nAnúncio <:1_:703972823646994472> Faz um anúncio num canal.\nBotinfo <:1_:703972823646994472> Envia a informação sobre o bot.\nServerinfo <:1_:703972823646994472> Envia as informações deste servidor. \nIp <:1_:703972823646994472> Informa-te o ip do servidor!\nSite <:1_:703972823646994472> Envia o link do site oficial do servidor!\nWarn <:1_:703972823646994472> Vê/seta/reseta/retira os avisos de um membro!')
    .setFooter('Bot desenvolvido pela Francisca.105#8965')
    .setColor('RANDOM')

        message.channel.send(embed)
    }
    module.exports.help = {
        name: "ajuda",
        aliases: ["?", "help"]
    }    