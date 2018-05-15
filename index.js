const Discord = require('discord.js');
const client = new Discord.Client();
const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

client.on('ready', () => {
  client.user.setActivity('Con tu corazón', {type: 'PLAYING'});
  console.log('Listo!');
});
//declaracion de variables
var fortunes = [
  "Sip",
  "Nope",
  "No puedo responder eso",
  "Si",
  "No",
  "Tal vez",
  "No soy cientifico",
  "Esto es incomodo",
  "Seguro",
  "Confia en ello",
  "Es una broma?",
  "Claro que no"
];

let prefix = process.env.PREFIX;

client.on('message', message => {
  if (!message.content.startsWith(prefix) || !message.guild) return;
  if (message.author.bot) return;
  
  const cont = message.content.split(' ').slice(1);
  const args = cont.join(' ');
  if (message.content.startsWith(prefix+'8ball')) {
    ball8(message.content);
  }
  if (message.content.startsWith(prefix+'help')) {
    showHelp(message.author);
  }
  if (message.content.startsWith(prefix+'botinfo')) {
    botinfo(message.author);
  }
  if (message.content.startsWith(prefix+'ping')){
      message.channel.send('pong');

  } else if (message.content.startsWith(prefix+ 'say')) {
      if (!args) return;
      message.channel.send(args);
  }
  function ball8(question) {
    if (args[1]) {
      message.channel.send("```css\n"+fortunes[Math.floor(Math.random() * fortunes.length)]+"\n```");
    } else {
      message.channel.send("Escribe tu pregunta despues de ``s!8bal``");
    }
  }
  function showHelp(author) {
    const embed = new Discord.RichEmbed()
      .setThumbnail()
      .addField('Comandos (sin categoria aun)', "``s!ping`` ``s!botinfo`` ``s!8ball`` ``s!avatar`` ``s!help`` ``s!cat``", true)
      .addField('Tip:','Coloca ``"s!help [comando]"`` para mostrar mas informacion acerca del comando.\n ``Ej: s!help ping``', true)
      .setFooter('consultado por '+(author.username), author.displayAvatarURL)
      .setTimestamp()

      message.channel.send({embed});

      return author;
  }
  function botinfo(author) {
    const embed = new Discord.RichEmbed()
      .setColor('0x9489b3')
      .setThumbnail()
      .addField('Nombre del bot', "Soso!")
      .addField('Version', "1.0.0", true)
      .addField('Creador', "<@"+process.env.ownerId+">", true)
      .addField('Referencias', '[Documentacion]('+"https://capudev.herokuapp.com/"+')', true)
      .setFooter('consultado por '+(author.username), author.displayAvatarURL)
      .setTimestamp()

      message.channel.send({embed});

      return author;
  }
});

client.login(process.env.TOKEN);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req,res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))