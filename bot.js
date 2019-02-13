const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("544853367105650688")
setInterval(function() {
channel.send(`hi hi hi hi hi hi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
