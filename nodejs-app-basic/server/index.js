/*
 * Module Dependencies.
 */
const app = require('../app')
const cluster = require("cluster")

/**
 * Declare cluster nodes
 */
const nodes = require('os').cpus().length

/**
 * Declare port (if not already declared as an environment variable)
 */
const port = process.env.PORT || 3000

if (!module.parent) {
	if (cluster.isMaster) {
		for(let i = 1; 1 <= nodes ? i <= nodes : i >= nodes; 1 <= nodes ? i++ : i--){
			cluster.fork()
		}
		cluster.on('death', function(worker) {
			cluster.fork()
		})
		cluster.on('exit', function(worker) {
			cluster.fork()
		})
	} else{
		app.start(port)
	}
}