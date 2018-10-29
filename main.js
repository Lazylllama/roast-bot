/*
*
*  Ideas to add to Roast-Bot:
* ----------------------------
*  Add so if someone inputs a command wrong it will give an error message that says they can use rb!command help for more info.
*
*  Add a rb!user @USER and have stats such as if they have nitro, servers in, date joined disord and other info
*  Make it so when it has try catch block for commands if will eventaully send errors to db. 
*
*/
const Discord = require("discord.js");
const client = new Discord.Client();

const botFile = require("./commands/bot");
const clearFile = require("./commands/clear.js");
const serverFile = require("./commands/server.js");
const inviteFile = require("./commands/invite.js");
const helpFile = require("./commands/help.js");
const roastFile = require("./commands/roast.js");
const memeFile = require("./commands/meme.js");
const sayFile = require("./commands/say.js");
const urbanFile = require("./commands/urban");
const xpLevelFile = require("./database/xp-level.js");
const userFile = require("./commands/user.js");
const customPrefixFile = require("./database/custom-prefix.js");
const prefixFile = require("./database/prefix.json");
const feedbackFile = require("./database/feedback.js");
const customRoastFile = require("./database/custom-roast.js");
const onOffFile = require("./database/on-off.js");
const vidFile = require("./commands/vid.js");
const pollFile = require("./commands/poll.js");
const websiteFile = require("./commands/website.js");

const botPrecense = [
	"http://roast-bot.com",
	"On-Off now live! r!off commandName",
	"Custom Roasts now live! r!croast help",
	"Use r!feedback messasge to send feedback"
];
client.on("ready", () => {
	console.log("-----------------------------------")
	console.log("Roast-Bot-Beta is Ready");
	console.log("-----------------------------------")
	setInterval(() => {
		let random = Math.floor(Math.random() * 4);
		client.user.setActivity(`${prefixFile.prefix}help | ${botPrecense[random]}`, { type: "PLAYING" });
	}, 20000);
});
client.on("guildMemberAdd", (member) => {
	let welcomeleavechannel = member.guild.channels.find(c => c.name === "welcome-leave-log");
	if (!welcomeleavechannel) return;
	let joinTime = new Date();
	let joinEmbed = new Discord.RichEmbed()
		.setTitle(member.user.username + " has joined the server.")
		.setColor("#EB671D")
		.addField("Time:", joinTime)
		.addField("Tag:", member)
		.setThumbnail(member.user.displayAvatarURL);
	welcomeleavechannel.send(joinEmbed);
});
client.on("guildMemberRemove", (member) => {
	let welcomeleavechannel = member.guild.channels.find((c) => c.name === "welcome-leave-log");
	let leaveTime = new Date();
	if (!welcomeleavechannel) { return; }
	let leaveEmbed = new Discord.RichEmbed()
		.setTitle(member.user.username + " has left the server, later aligator.")
		.setColor("#EB671D")
		.addField("Time:", leaveTime)
		.addField("Tag:", member)
		.setThumbnail(member.user.displayAvatarURL);
	welcomeleavechannel.send(leaveEmbed);
});
client.on("message", (message) => {
	onOffFile.run(message);
	//helpFile.run(client, message);
	botFile.run(client, message);
	roastFile.run(message);
	inviteFile.run(message);
	serverFile.run(message);
	memeFile.run(message);
	sayFile.run(message);
	clearFile.run(message);
	urbanFile.run(message);
	xpLevelFile.run(message);
	userFile.run(message);
	feedbackFile.run(message);
	customPrefixFile.run(message);
	customRoastFile.run(message);
	vidFile.run(message);
	pollFile.run(message);
	websiteFile.run(message);
});

client.login(process.env.BOT_TOKEN);