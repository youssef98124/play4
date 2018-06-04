const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

client.on('message', message => {
  if (message.content.startsWith('مهرجان فساد العالم')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=-vBqnFcGnYE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());

      });
  }
})

client.login('NDI2NzU2OTU2MTE2NzQ2MjUy.DZan8g.pWZwtE4y-RLoZr9ZgTRcC5JwiL4');
