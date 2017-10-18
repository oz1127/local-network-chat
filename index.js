'use strict'

var createChannel = require('multicast-channel')

// channel is an event emitter
const channel = createChannel({name: 'derhuerst'})

channel.on('error', console.error)
channel.on('message', (msg, from) => {
	console.log('got a message!', msg, from)
})

channel.on('open', () => {
	channel.send({hello: 'friends!'})
})

