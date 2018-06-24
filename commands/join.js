const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    // if (!message.guild) return;

    // if (message.member.voiceChannel) {
    //     message.member.voiceChannel.join()
    //     .then(connection => { 
    //         message.reply('1');
    //     })
    //     .catch(console.log);
    // } else {
    //     message.reply('0');
    // }
    message.channel.send("join");
}

module.exports.help = {
    name:"join"
}