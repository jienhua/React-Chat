var express = require('express')
var app     = express()
var path    = require('path')
var http    = require('http').Server(app)
var morgan  = require('morgan')
var io      = require('socket.io')(http)
// var compression = require('compression')

// app.use(compression())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
	res.sendFile('index.html')
})

io.on('connection', socket =>{
	console.log('a user connected')
	
	
	socket.on('disconnect', ()=>{
		console.log('user disconnected')
	})

	socket.on('chat message', msg=>{
		io.emit('chat message', msg)
	})
})

http.listen(8080, ()=>{
	console.log('listening on : 8080')
})