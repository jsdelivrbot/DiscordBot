//Bot creado por <name> utilizando: node.js y discord.js
//Utilizando Heroku como servidor del bot asi como Github y Heroku CLI

//Enlaces externos:
//https://capudev.herokuapp.com/
//https://github.com/Bubbr/proyecto1


const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({disableEveryone: true});
const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const prefix = process.env.PREFIX;

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("Error cargando los comandos!");
    return;
  }
  console.log(`Cargando ${jsfiles.length} comandos!...`);

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} cargado!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on('ready', () => {
  bot.user.setActivity('Osu!', {type: 'PLAYING'});
  console.log('Listo!');
});

bot.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) {
    cmd.run(bot, message, args);
  } else {
    message.reply("Comando desconocido, utiliza ``s!help`` para ver la lista de comandos");
  }
});

bot.login(process.env.TOKEN);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req,res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))