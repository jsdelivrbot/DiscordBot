const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send('Bot en mantenimiento');
}

module.exports.help = {
    name:"help"
}