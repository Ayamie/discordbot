const { RichEmbed } = require("discord.js");

module.exports = {
    name: "saydev",
    category: "dev",
    description: "Says your input via the bot (Bypass role)",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        //Bypass server management role

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}