const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, msg, args) => {
  

  msg.reply(new Discord.MessageEmbed().setDescription("**Discord:** [:arrow_upper_right:](https://discord.gg/R6AdUMMq)\n\n**Mesaj:** [:arrow_upper_left:](https://discord.gg/R6AdUMMq)"));

        }


exports.conf = {
  aliases: []
};

exports.help = {
  name : "bağlantılıemoji"
};