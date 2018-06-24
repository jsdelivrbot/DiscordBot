const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (args[0]) {
        switch (args[0]) {
            case "hentai":
                message.reply("Comando: hentai");
                break;
            default:
                message.reply("Comando desconocido!, utiliza ``s!help`` para ver la lista de comandos");
        }
    } else {
        const embed = new Discord.RichEmbed()
          .setColor('0x9489b3')
          .setAuthor("Necesitas ayuda?")
          .setDescription("Campo de ayuda de comandos, si necesitas más información acerca de un comando usa ``s!help [comando]``\nEj: ``s!help mute``")
          .addField("MUSICA", "``join`` ``leave`` ``play`` ``stop`` ``skip`` ``queue`` ``volume`` ``repeat``")
          .addField("IMAGENES", "``cat`` ``neko`` ``aprovecha``")
          .addField("VARIOS", "``urban`` ``8ball`` ``licuado`` ``pera`` ``ping``")
          .addField("NSFW", "``hentai`` ``porn``")
          .addField("ADMIN", "``mute`` ``unmute``")
          .setFooter('consultado por '+(message.author.username), message.author.displayAvatarURL)
          .setTimestamp()

          message.channel.send({embed});
    }
}

module.exports.help = {
    name:"help"
}