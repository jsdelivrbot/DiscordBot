const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor('0x9489b3')
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail("https://vignette.wikia.nocookie.net/mugen-souls/images/0/08/Loli_bath_time-_Belleria.png/revision/latest?cb=20131217100659")
      .setTitle("Este es el titulo")
      .setDescription("Descripcion del embed")
      .setImage("https://orig00.deviantart.net/87cc/f/2016/034/9/2/loli_desu_by_kawaiicrazzy-d9qerxb.png")
      .addField("nombre", "valor", true)
      .addField("nombre", "valor")
      .setFooter('consultado por '+(message.author.username), message.author.displayAvatarURL)
      .setTimestamp()

      message.channel.send({embed});
}

module.exports.help = {
    name:"test"
}