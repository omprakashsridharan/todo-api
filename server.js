var express = require('express'),
    app = express(),
    port = process.env.port,
    mongoose = require('mongoose'),
    Todos = require('./api/models/todoListModel'),
    bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://omprakashsridharan:12qwmn09@ds163796.mlab.com:63796/todo-api-db')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/todoListRoute')
routes(app)

app.use((req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
  })

app.listen(port)
console.log('Todo List server started on'+port)