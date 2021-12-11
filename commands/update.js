exports.run = (client, message, args, err) => {
const request = require('request')
var mcIP = 'jogar-splekmc.tk'
var url = 'https://api.minetools.eu/query/' + mcIP  

/*setInterval(function update() {
    request(url, function(err, response, body) {
        if(err) {
            return console.log(error);
        }
        body = JSON.parse(body);
        if(body.status === 'OK') {
            client.channels.get("704683382608625784").setName(`Status: Online`);
            client.user.setStatus('online').catch(console.error);
            if(body.Players) {
                client.channels.get("704683310286372914").setName(`Players: ${body.Players}/${body.MaxPlayers}`);
            } else {
                client.channels.get("704683310286372914").setName(`Players: 0/${body.MaxPlayers}`);
            }
        } else {
            client.channels.get("704683382608625784").setName(`Status | Offline`);
        }
    });
}, 1000)
    message.channel.send('Os canais de estatística foram atualizados! <:6_:703974496721305620>')*/

    message.channel.send('<:18:703982691414048858> O sistema está em desenvolvimento.')

}
module.exports.help = {
    name: "update",
    aliases: []
}