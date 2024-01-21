const socket = io()

let user

Swal.fire ({
    title: 'Identificate',
    input:'text',
    text: 'Ingresa Usuario para ingresar al chat',
    inputValidator: value => {
        return !value && 'Necesitas ingresar el nombre usuario para continuar'
    },
    allowOutsideClick:false
}).then(result =>{
    user=result.value
    console.log(user)
})

const chatbox = document.querySelector('#chatbox')
chatbox.addEventListener('keyup', async (eve)=>{
    if(eve.key==='Enter'){
        if(chatbox.value.trim().length > 0){
            socket.emit('message', {user, message: chatbox.value})
            chatbox.value = ''
        }
    }
})

socket.on('messageLogs', data => {
    let messageLogs = document.querySelector('#messageLogs')
    let mensajes = ''
    data.forEach(mensaje => {
        mensajes += `<li>${mensaje.user} dice: ${mensaje.message}</li>`
    }); 
    messageLogs.innerHTML = mensajes
} )


