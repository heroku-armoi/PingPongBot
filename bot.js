const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'Բարլուս') {
    message.reply('Բարլուս իմ թագավոր ախպեր');
  } else if (message.content === 'Ինչ կա՞'){
    message.reply('Բան չէ եղս դու ասա');
  } else {
    message.reply('Մեռնեմ քեզ նորմալ բան ասա հասկանանք');
  }
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
