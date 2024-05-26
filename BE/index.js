
import express from "express"
import { Server } from "socket.io"

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const io = new Server(server, {
    cors: "*"
});

io.on("connection", (socket) => {
    console.log("Socket connected", socket.id);

    socket.on("disconnect", () => {
        console.log("Socket disconnected", socket.id);
    })

    socket.on("sendData", (data) => {
        console.log(data);
        io.emit("message", data)
    })

    socket.on("showTyping", (data) => {
        socket.broadcast.emit("typing", data)
    })

    socket.on("removeTyping", (data) => {
        socket.broadcast.emit("remove", data)
    })

})
