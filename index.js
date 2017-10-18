'use strict'

var createChannel = require('multicast-channel')
var randomWord = require('random-word')

// channel is an event emitter
const channel = createChannel({name: process.argv[2]})

channel.on('error', console.error)
channel.on('message', (msg, from) => {
	console.log('got a message!', msg, from)
})

channel.on('open', () => {
	setInterval(function(){
		//send random word
		channel.send(randomWord())
		//channel.send({hello: 'friends!'})
	}, 2000)
})

