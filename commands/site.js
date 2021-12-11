exports.run = (client, message, args, err) => {
    let site = 'SplekMC.tk'
    const discord = require('discord.js')

    let embed = new discord.RichEmbed()
    .setTitle('Site')
    .setDescription(`O link do site é: [SplekMC.tk](https://SplekMC.tk)`)
    .setColor('#ffffff')
    
    message.channel.send(embed)
}
module.exports.help = {
    name: "site",
    aliases: ["website", 'loja', 'webstore', 'store']
}