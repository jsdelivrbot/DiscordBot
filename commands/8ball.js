const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
    var opts = [
        "No",
        "Sí",
        "Cuenta con ello",
        "La respuesta esta en tu corazón",
        "Claro que no",
        "Obvio no",
        "Sipi"
    ];

    if (args) {
        message.reply(opts[Math.floor(Math.random() * opts.length)]);
    } else {
        message.reply("Debes introducir una pregunta");
    }
}

module.exports.help = {
    name:"8ball"
}