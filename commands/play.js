const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send('play');
}

module.exports.help = {
    name:"play"
}