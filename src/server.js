import express from 'express'
import logger from 'morgan'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'

import socketProducts from './listener/socketProducts.js'
import appRouter from './routes/index.js'
import { connectDB } from './config/config.js'

const server = express ()
const PORT = 8080

server.use(express.static(__dirname+'/public'))
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(logger('dev'))
connectDB()

server.use(appRouter)

server.engine('handlebars', handlebars.engine())
server.set('views', __dirname+'/views')
server.set('view engine', 'handlebars')


const httpServer=server.listen(PORT, ()=>{
    try{
        console.log(`Servidor Express Puerto ${PORT}\nAcceder a:`)
        console.log(`\t1). http://localhost:${PORT}/api/products`)
        console.log(`\t2). http://localhost:${PORT}/api/carts`)
        console.log(`\t3). http://localhost:${PORT}/api/users`)
        console.log(`\t3). http://localhost:${PORT}/api/messages`)
    }
    catch (err){
        console.log(err)
    }
})

const socketServer = new Server(httpServer)
socketProducts(socketServer)

const io = new Server(httpServer)

let mensajes = []

io.on('connection', socket =>{
    console.log('cliente conectado')
    // io.emit('')
    socket.on('message', data => {
        console.log(data)
        mensajes.push(data)

        io.emit('messageLogs', mensajes)
    })
    
})


