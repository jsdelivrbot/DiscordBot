const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    await message.channel.send({files: [
        {
            attachment: "./images/WillyChino.png",
            name: "WillyChino.png"
        }
    ]});
}

module.exports.help = {
    name:'aprovecha'
}