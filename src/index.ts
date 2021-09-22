// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { token } from './config/config.json';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

console.log(token);
// When the client is ready, run this code (only once)
client.on('ready', () => {
  console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
