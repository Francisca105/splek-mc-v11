exports.run = (client, message, args, err) => {

    var discord = require('discord.js');
    var Discord = require('discord.js');
    var request = require('request');
    var mcIP = 'jogar-splekmc.tk'
    var url = 'https://api.minetools.eu/ping/' + mcIP  

    request(url, function(err, response, body) {
        body = JSON.parse(body);
        let off = new discord.RichEmbed()
            .setTitle('Ip: ' + mcIP)
            .setDescription('O servidor encontra-se atualmente **offline**')
            .setColor('000000')


        if(body.error) return message.channel.send(off)
        
        else{
            let sv = new discord.RichEmbed()
            .setTitle('Ip: ' + mcIP)
            .setDescription('O servidor encontra-se atualmente **online** com ' + body.players.online + ' a jogar no servidor!')
            .setColor('GREEN')
            
            message.channel.send(sv)
        }
    })
}
module.exports.help = {
        name: "serverstatus",
        aliases: ["svstatus", "statussv", "server", "sv", "status", "ip"]
}