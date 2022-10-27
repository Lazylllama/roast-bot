const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('r_bot')
        .setDescription('Gives information about the bot.'),
        async execute(interaction) {
            
            // Simply create a embed and reply to the command with the given embed.
                let icon = interaction.client.user.displayAvatarURL;
                let embed = new EmbedBuilder()
                    .setColor("#EB671D")
                    .setTitle("<:roast_circle:474755210485563404> Bot Information:")
                    .addFields(
                        { name: "Bot Name:", value: interaction.client.user.username },
                        { name: "Created On:", value: String(interaction.client.user.createdAt) },
                        { name: "Total Number of Roasts", value: "135", inline: true },
                        { name: "Total Number of Memes", value: "536", inline: true },
                        { name: "Number of Commands:", value: "14" }
                        )
                    .setFooter({ text: "Created by Ole113#2421 Rewritten by ElHeroLeGoat#9561" })
                await interaction.reply({embeds: [embed]});
        },
};