const Discord = module.require('discord.js');
const urban = module.require('urban');

module.exports.run = async (bot, message, args) => {
    if(args < 1) return message.channel.send("Introce al menos una palabra :angry: ");
    let str = args.join(" ");

    urban(str).first(json => {
        if(!json) return messgae.channel.send("No se encontró la palabra :cry: ");

        let embed = new Discord.RichEmbed()
            .setTitle(json.word)
            .setDescription(json.definition)
            .addField("Ejemplo", json.example)
            .addField("Likes", json.thumbs_up, true)
            .addField("Dislikes", json.thumbs_down, true)
            .setFooter(`Escrito por ${json.author}`)
        message.channel.send({embed});
    });
}

module.exports.help = {
    name:"urban"
}