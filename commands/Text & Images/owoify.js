const nekoslife = require("nekos.life"), nekolife = new nekoslife()
module.exports = {
    "commandLogic": async function commandLogic(itemsToImport){
        let {message, sendMessage}=itemsToImport

        sendMessage(message.channel.id, (await nekolife.sfw.OwOify({text: message.content})).owo)
    },
    "help":[
        {"name": "__Usage__","value": "Sometimes you just nyeed to owoify youw speech.\n```\n?PREFIX?help <command>\n```","inline": true}
    ]
}