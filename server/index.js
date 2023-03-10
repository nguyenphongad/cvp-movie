const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const Pingrouter = require("./Router/RouterUser")

const URL_MONGODB_ATLAS = "mongodb+srv://nguyenphonghk2003:123456789Phong@user-phong-db.2ljpgih.mongodb.net/users?retryWrites=true&w=majority"

// mongoose.connect(URL_MONGODB_ATLAS,{
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// })
//     .then(()=>console.log("connect mongodb success"))
//     .catch((error)=>console.log("no conect" + error))

const connectDB = async () => {
    try {
        await mongoose.connect(
            URL_MONGODB_ATLAS,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log('MongoDB connected :)')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

app.use(express.json())

app.use(cors())

app.use('/api', Pingrouter);

const PORT = 5000;
app.listen(PORT, () => { console.log("start port " + PORT) })













// app.get("/api", (req, res) => {
//     res.json({
//         "users": ["a1", "b1", "c2"]
//     })
// })