/*
 * Module dependencies.
 */
const HzClient  = require('hazelcast-client').Client
const HzConfig = require('hazelcast-client').Config

/**
 * Create the server object.
*/
const app = {}

/**
 * Declare a 'start' function that accepts a port.
*/
app.start = (port) => {
	//app.listen(port)
	console.log('The APP is listening on port '+ port)
	let serverInfo = process.env.HZ_SERVERS
	console.log(JSON.parse(serverInfo).nodes)
}
module.exports = app