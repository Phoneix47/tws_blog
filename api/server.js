const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var mysql = require('mysql')

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({
  extended: true
}));

const port = 3300
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dope',
  database: 'list',
 })

db.connect((err)=> {
  if(!err) 
    console.log('DB connected');
    else 
    console.log(`Database connection is failed. Error: ${err}`)
}
)



app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`)
});


app.get('/', (req,res) =>{
  res.send("Welcome to the Server");
})

app.get(`/task/count`,(req,res)=>{
db.query(`select count(id) from task`,(err, value, fields)=>{
if(!err) {
  res.send(value)
console.log("showing id using name")
} else {
  console.log(err);
} 

})
});






app.get(`/task/:id`,(req,res)=>{
  let id = req.params.id;
db.query(`select * from task where id = ${id}`,(err, rows, fields)=>{
if(!err) {
  res.send(rows)
console.log("showing id using name")
} else {
  console.log(err);
} 

})
});

app.delete(`/task/:id`,(req,res)=>{
  let id = req.params.id;
db.query(`delete from task where id = ${id}`,(err, rows, fields)=>{
if(!err) {
  res.send(`Task number ${id} is deleted`);
  console.log(`Deleting blog id number ${id}`)
} else 
console.log(err);
})
});




app.get('/task',(req,res)=>{
db.query("select * from task",(err, rows, fields)=>{
if(!err) 
res.send(rows);
else 
console.log(err);
})
});


app.get("/alltask", (req, res) => {
  db.query("select * from task", (err, rows, fields) => {
    if(!err)
    res.send({rows})
    else 
    console.log(err);
  })
})

app.post('/tasks', (req, res) => {
  let task = req.body.task;
  let desc = req.body.desc;
  db.query(`insert into task (tasks,created_on,description) values ("${task}" , CURRENT_TIMESTAMP, "${desc}")` , (err, rows, fields)=> {
    if(!err){
      res.send({status: 200, data: task , desc});
      console.log("new blog added into the db")
    }
    
    else
    console.log(err);
  } ) 
})

app.delete('/tasks', (req, res) => {
  let id = req.body.id;
  db.query(`Delete from task where id = ${id}`, (err)=> {
    if(!err)
    res.send({status: true});
    else
    console.log(err);
  })
})


  


