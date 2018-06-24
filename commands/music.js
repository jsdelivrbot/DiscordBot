const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('0x9489b3')
        .setAuthor("Necesitas ayuda?")
        .setThumbnail("https://orig00.deviantart.net/87cc/f/2016/034/9/2/loli_desu_by_kawaiicrazzy-d9qerxb.png")
        .setDescription("Campo de ayuda de musica, si necesitas más información acerca de un comando usa ``s!help [comando]``\nEj: ``s!help mute``")
        .addField("MUSICA", "``join`` ``leave`` ``play`` ``stop`` ``skip`` ``queue`` ``volume`` ``repeat``")
        .setFooter('consultado por '+(message.author.username), message.author.displayAvatarURL)
        .setTimestamp()

        message.channel.send({embed});
}

module.exports.help = {
    name:"music"
}