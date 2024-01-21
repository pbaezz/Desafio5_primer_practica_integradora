import MessageManager from "../dao/controllers/Mongo/messageManagerMongo.js"

const mm = new MessageManager()

const socketChat=(socketServer)=>{
    socketServer.on('connection',async(socket)=>{
        console.log("conectado usuario con id: " + socket.id)
        socket.on("mensaje", async (info) => {
            await mm.createMessage(info);
            // Emitir el mensaje a todos los clientes conectados
            socketServer.emit("chat", await mm.getMessages());

            socket.on("addMessages",async(obj)=>{
                await mm.addMessages(obj)
                const listademessages=await mm.getMessages()
                socketServer.emit("enviodemessages",listademessages)
                })    
        })
        socket.on("clearchat", async () => {
            // Borrar todos los mensajes utilizando el MessagesManager
            await mm.deleteAllMessages();
            
        });

        socket.on("nuevousuario",(usuario)=>{
            socket.broadcast.emit("broadcast",usuario);
    
        })
    })
}

export default socketChat