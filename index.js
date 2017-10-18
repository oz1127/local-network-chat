'use strict'

var createChannel = require('multicast-channel')
var chalk = require('chalk')

// channel is an event emitter
const channel = createChannel({name: 'derhuerst'})

channel.on('error', console.error)
channel.on('message', (msg, from) => {
	console.log(chalk.red(from) + chalk.yellow(msg))
})

channel.on('open', () => {
	channel.send({hello: 'friends!'})
})
