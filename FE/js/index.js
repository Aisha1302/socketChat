
const socket = io('http://localhost:3000')

let data = document.getElementById("inputData")

// ^ get the data and send it to backend
function getInputData() {
    socket.emit("sendData", data.value)
    data.value = ""
}

// ^ show the message after send
socket.on("message", (data) => {
    document.getElementById("showMessage").innerHTML += ` <div>
   <p class="messageBg rounded-3 p-1">${data}</p>
 </div>`
})


data.addEventListener("input", (e) => {
    socket.emit("showTyping", e.target.value)
})

socket.on("typing", (data) => {
    document.getElementById("isTyping").classList.replace("d-none", "d-block")
})

data.addEventListener("keyup", (e) => {
    socket.emit("removeTyping", e.target.value)
})

socket.on("remove", (data) => {
    setTimeout(() => {
        document.getElementById("isTyping").classList.replace("d-block", "d-none")
    }, 1500)
})


