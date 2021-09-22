const Discord = require('discord.js');
const { token } = require('./config/env.json');

// Create a new client instance
const client = new Discord.Client();

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);