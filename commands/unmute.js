const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No tienes permisos para hacer eso!");

    let umd = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!umd) return message.channel.send("Debes mencionar a alguien para silenciarlo!");
    
    let role = message.guild.roles.find(r => r.name === "s! Muted")

    if(!role || !umd.roles.has(role.id)) return messgae.channel.send("Este usuario no esta silenciado!");

    await umd.removeRole(role);
    message.channel.send("Ya no estas silenciado!");
}

module.exports.help = {
    name:'unmute'
}