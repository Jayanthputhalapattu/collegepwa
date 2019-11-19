var request = require('request')
var TelegramBot = require('node-telegram-bot-api'); //importing the package
var token = '739892719:AAFGPNHFLnHvHDrHk7S-YsieRpYJA_Ib10M';
var bot = new TelegramBot(token, {polling: true});
bot.on('message',function(msg){
	var a=msg.text.toUpperCase();
request('https://api.openweathermap.org/data/2.5/weather?appid=c50504b724cf9f13a4a4d5a190539e3f&q='+a,function(error,response,body){
	console.log(body)
	bot.sendMessage(msg.chat.id,JSON.parse(body).main.temp)
})

})