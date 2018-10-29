const botConfig = require("./botConfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () =>{
  console.log("Bot is Ready");
  console.log("kill Me");
});

bot.on("guildMemberAdd", member => {
  member.addRole(member.guild.roles.find("name", "<----------GENDER----------->"));
  member.addRole(member.guild.roles.find("name", "<-------------AGE------------->"));
  member.addRole(member.guild.roles.find("name", "<---------SEXUALITY-------->"));
  member.addRole(member.guild.roles.find("name", "<------RELATIONSHIP------->"));
  member.addRole(member.guild.roles.find("name", "<-----------OTHER------------>"));
});

bot.login(botConfig.token);
