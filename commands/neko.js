const Discord = module.require('discord.js');
const snek = module.require('snekfetch');
const api = "https://konachan.com/post.json?limit=1&tags=catgirl&page=";
const yande = "https://yande.re/post.json?limit=1&tags=catgirl&page=";

module.exports.run = async (bot, message, args) => {
    // function getHt(web) { //Ej: getHt(konachan);
    //     var random = Math.floor(Math.random() * 20000);
    //     let file = (await snek.get(api+random)).body[0].file_url;
    //     return file;
    // }
    let msg = await message.channel.send('Buscando...');
    try {
        var random = Math.floor(Math.random() * 20000);
        let file = (await snek.get(api+random)).body[0].file_url;
        if (!file) return message.channel.send("Ocurrio un error :cry: ");
        await message.channel.send({files: [
            {
                attachment: file,
                name: file.split("/").pop()   
            }
        ]});
        msg.delete();
    } catch(err) {
        random = Math.floor(Math.random() * 2000);
        file = (await snek.get(api+random)).body[0].file_url
        while (!file) {
            random = Math.floor(Math.random() * 200);
            file = (await snek.get(api+random)).body[0].file_url
        }
        await message.channel.send({files: [
            {
                attachment: file,
                name: file.split("/").pop()   
            }
        ]});
        msg.delete();
    }
}

module.exports.help = {
    name:"neko"
}