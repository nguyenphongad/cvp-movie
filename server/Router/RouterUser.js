const express = require('express')
const router = express.Router()
const User = require("../Models/User")

router.get('/users', async(req, res)=>{
    try {
        const users = await User.find();
        if(!users){
            return res.status(400).json({message : "not found users"})
        }
        res.json(users);
    }catch (error){
        res.console.log(error)
        res.status(500).json({message : "error!!!" + error.message})
    }
})

module.exports = router;
