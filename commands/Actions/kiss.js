const nekoslife = require("nekos.life"), nekolife = new nekoslife()
module.exports = {
    "commandLogic": async function commandLogic(itemsToImport) {
        let {message}=itemsToImport

        if (message.mentions.length !== 1) return message.channel.createMessage("Please mention a user.").catch(err => console.error("Cannot send messages to this channel", err));
        
        message.channel.createMessage({
            "embed": {
                "title": `${message.mentions[0].username} was kissed by ${message.author.username}`,
                "color": 2717868,
                "timestamp": new Date().toISOString(),
                "image": {
                    "url": (await nekolife.sfw.kiss()).url
                }
            }
        }).catch(err => console.error("Cannot send messages to this channel", err));
    },
    "help":[
        {"name": "__Usage__","value": "Kiss someone special to you.\n```\n?PREFIX?kiss <@user>\n```","inline": true}
    ]
}