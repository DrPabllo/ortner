const { Client, GatewayIntentBits } = require('discord.js');

// Erstelle den Bot-Client mit den benötigten Intents
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Dein Discord-Bot-Token (geheim halten!)
const TOKEN = 'MTM1Mjk4MzEwMzQ0NjE5MjEzOA.GcQco0.GNb-kl8W9Y-XQ0IAh3Qk1wexPKsUKrMOm8C26I';

// Wird ausgelöst, wenn der Bot online geht
client.once('ready', () => {
    console.log(`✅ Eingeloggt als ${client.user.tag}`);
});

// Reagiere auf Nachrichten
client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    }
});

// Starte den Bot
client.login(TOKEN);