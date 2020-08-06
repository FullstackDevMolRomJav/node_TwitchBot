const tmi = require('tmi.js');

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: 'tiwtchMerlin',
        password: 'oauth:ts7lj667jnn0fh8k5o0g4j4opn6fko'
    },
    channels: ['tiwtchMerlin']
};

const clientTMI = new tmi.client(options);

clientTMI.connect();

clientTMI.on('connected', (address, port) => {
    clientTMI.action('tiwtchMerlin', `Connected to -> ${address}:${port}`);
});

clientTMI.on('chat', (target, ctx, message, self) => {
    if (self) return;

    console.log(target),
        console.log(ctx);

    const commandName = message.trim();

    if (commandName === "hello") {
        clientTMI.say(target, `Welcome ${ctx.username}`);
    }

});