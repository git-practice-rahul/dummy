const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const corsOptions = require('./corsOption')
const Question = require('./Model/Question')
const cors = require('cors')
const { urlencoded } = require('body-parser')

app.use(cors(corsOptions))
app.use(bodyParser())
app.use(urlencoded({extends:false}))


mongoose.connect('mongodb://localhost:27017/dummy',  ()=>{
  console.log('connected to mongo successfully');
})


app.get('/',async (req, res) => {
  
  res.send('Hello World!')
  
})

app.post('/upload', async(req, res)=>{
    console.log(req.body);

    // const ques = new Question(req.body)

    const data = await Question.create(req.body)
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})