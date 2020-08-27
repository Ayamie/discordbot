module.exports = {
    name: "ping",
    category: "info",
    description: "Return API ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`🏓 Pong!
        API Latency is ${Math.round(client.ping)}ms`);
    }
}
