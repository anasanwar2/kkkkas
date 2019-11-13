const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643813432772132867")
setInterval(function() {
channel.send(`Anas THE King Here thx you for listen Anas THE King Here thx you for listen Anas THE King Here thx you for listen`);
}, 30)
})

client.login(process.env.BOT_TOKEN);