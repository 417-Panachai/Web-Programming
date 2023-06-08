const express = require('express')
// const router = express.Router()
const User = require("./models/user")
const mongoose =require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors());



const dbUrl = 'mongodb://127.0.0.1:27017/coin'
mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ส่งข้อมูลเข้า
app.post('/register', async (req, res) => {
    const username = req.body.username
    const realName = req.body.realName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const role = "user";
    
    const user = new User({ username: username, realName: realName, lastName: lastName, email: email, password: password, role: role });
    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }
});

// ส่งข้อมูลออก
app.get('/sing_in', async (req, res) => {
    // {username: "panachai2546p"}
    User.find().then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.error(err);
        res.send(err);
    });
});

// app.get('/sing_in', async (req, res) => {
//     const { username } = req.query;
  
//     try {
//       const user = await User.findOne({ username });
//       if (user) {
//         res.send('มีผู้ใช้นี้ในระบบแล้ว');
//       } else {
//         res.send('ผู้ใช้งานนี้ยังไม่มีในระบบ');
//       }
//     } catch (error) {
//       console.error('เกิดข้อผิดพลาดในการค้นหาผู้ใช้:', error);
//       res.status(500).send('เกิดข้อผิดพลาด');
//     }
// });
  








app.listen(3001,()=>{
    console.log("server start")
})



















// app.get('/',(req,res)=>{
//     res.send("Hello node")
// })
// app.get('/asdf',(req,res)=>{
//     res.send("Hello asdf")
// })


// router.get('/home',(req,res)=>{
//     res.send("Hello home")
// })
// router.get('/register',(req,res)=>{
//     res.send("Hello register")
//     // console.log(req.query);
// })
// app.use(router)