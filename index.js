const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildsMembers,
        IntentsBitField.Flags.GuildsMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.login("MTM1Mjk4MzEwMzQ0NjE5MjEzOA.GjeTZb.s7Qhj_uKYoGzd0OhIBEMkVRXXXdwimJI1PqyFE"
);