const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('editembed')
        .setDescription('.')
        .addStringOption(option => option.setName('message_id').setDescription('.').setRequired(true))
        .addStringOption(option => option.setName('title').setDescription('.').setRequired(false))
        .addStringOption(option => option.setName('description').setDescription('.').setRequired(false))
        .addStringOption(option => option.setName('field_name').setDescription('.').setRequired(false))
        .addStringOption(option => option.setName('field_value').setDescription('.').setRequired(false)),

    async execute(interaction) {
        const messageId = interaction.options.getString('message_id');
        const title = interaction.options.getString('title');
        const description = interaction.options.getString('description');
        const fieldName = interaction.options.getString('field_name');
        const fieldValue = interaction.options.getString('field_value');

        const channel = interaction.channel;
        const message = await channel.messages.fetch(messageId).catch(() => null);
        if (!message || !message.embeds[0]) return interaction.reply({ content: 'Is kein Embed oder der shit existiert nd', ephemeral: true });
        
        let embed = EmbedBuilder.from(message.embeds[0]);
        if (title) embed.setTitle(title);
        if (description) embed.setDescription(description);
        if (fieldName && fieldValue) embed.addFields({ name: fieldName, value: fieldValue });
        
        await message.edit({ embeds: [embed] });
        interaction.reply({ content: 'Hab geändert, jz nerv nd', ephemeral: true });
    }
};