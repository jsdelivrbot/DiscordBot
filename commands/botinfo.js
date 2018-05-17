const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor('0x9489b3')
      .setThumbnail()
      .addField('Nombre del bot', "Soso!", true)
      .addField('Version', "1.3.3", true)
      .addField('Creador', "<@"+process.env.ownerId+">", true)
      .addField('Referencias', '[Documentacion]('+"https://capudev.herokuapp.com/"+')', true)
      .setFooter('consultado por '+(message.author.username), message.author.displayAvatarURL)
      .setTimestamp()

      message.channel.send({embed});
}

module.exports.help = {
    name:"botinfo"
}