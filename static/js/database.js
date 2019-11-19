var mongojs = require('mongojs')
var db = mongojs('mongodb://nsrjc:nsrjc@cluster0-shard-00-00-kbe44.mongodb.net:27017/jc?ssl=true&authSource=admin', ['chan'])
var TelegramBot = require('node-telegram-bot-api');

var token = '739892719:AAFGPNHFLnHvHDrHk7S-YsieRpYJA_Ib10M';
var bot = new TelegramBot(token, {polling: true});





bot.on('message',function(msg){ 

    var ab = msg.text;
    var cd = ab.split(',')
    console.log(cd)

if (cd.length<=1) {
	var g =cd[0]
	console.log("hi")
	var car ={
		rkey:cd[0]

	}

    db.nsr.find(car,function(err,data){
    	console.log(err)
    	if (data.length>0){
    		for(i=0;i<data.length;i++){
    			bot.sendMessage(msg.chat.id,data[i].rmessage)
    		}
    	}
    	else{
    		bot.sendMessage(msg.chat.id,'data is not avaliable')
    	}
    })
}
else{
	var f =cd[0];
	var car ={
		rkey:cd[0],
		rmessage:cd[1]
	}
	db.nsr.insert(car,function(err,data){
		bot.sendMessage(msg.chat.id,'data stored successfully')
	})
}})