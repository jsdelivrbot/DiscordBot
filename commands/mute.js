const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No tienes permisos para hacer eso!");

    let umd = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!umd) return message.channel.send("Debes mencionar a alguien para silenciarlo!");
    
    let role = message.guild.roles.find(r => r.name === "s! Muted")
    if(!role) {
        try{
            role = await message.guild.createRole({
                name:"s! Muted",
                color: "#000000",
                permissions: []
            });
    
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }

    if(umd.roles.has(role.id)) return messgae.channel.send("Este usuario esta silenciado!");

    await umd.addRole(role);
    message.channel.send("Silenciado!");
}

module.exports.help = {
    name:'mute'
}