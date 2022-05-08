const express = require("express");
const serverless = require("serverless-http");

const app = express()

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        'hello':'fak u!'
    })
})
router.get('/videos',(req,res)=>{
    res.json({
        'hello':'fak asdasdsau!'
    })
})

app.use('/.netlify/functions/api',router)

module.exports.handler = serverless(app)