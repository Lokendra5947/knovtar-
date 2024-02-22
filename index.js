const express = require("express")
const { userRoutee } = require("./Routes/userRouter")
const { postRoute } = require("./Routes/postRouter")

require("./Helper/Dbconnection")
const App = express()
PORT = 8000
App.use(express.json())

App.use("/user", userRoutee)
App.use("/post", postRoute)

App.listen(PORT, ()=>{
    console.log(`Server is Running at ${PORT}`)
})