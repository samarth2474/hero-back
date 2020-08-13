
var express =  require('express')
var cors = require('cors')

const app = express()
app.use(cors())
const fs = require('fs')


const data =fs.readFileSync(`${__dirname}/hero.json`, 'utf-8')
const hero = JSON.parse(data);
console.log(hero)


 const keys = Object.keys(hero)
 const values = Object.values(hero)

 console.log(keys)
 console.log(values)


app.get('/hero',(req, res)=>{

    res.send(hero)
    
        
})

app.get('/hero/keys',(req, res)=>{
    
    res.send(keys)
    
        
})

app.get('/hero/values',(req, res)=>{
    
    res.send(values)
    
        
})


app.listen(8000,()=> {
    console.log("talking to server on port 8000")
})