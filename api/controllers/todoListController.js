'use strict';
var mongoose = require('mongoose')
var Todos = mongoose.model('Todos');

exports.listAllTodos = (req,res)=>{
    Todos.find({},(err,todo)=>{
        if(err)
            res.send(err)
        res.json(todo)
    })
}

exports.createTodo = (req,res)=>{
    var newTodo = new Todos(req.body)
    newTodo.save((err,todo)=>{
        if(err)
            res.send(err)
        res.json(todo)
    })
}


exports.readTodo = function(req, res) {
    Todos.findById(req.params.taskId, function(err, todo) {
      if (err)
        res.send(err);
      res.json(todo);
    });
  };

  exports.updateTodo = function(req, res) {
    Todos.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, todo) {
      if (err)
        res.send(err);
      res.json(todo);
    });
  };

  exports.deleteTodo = function(req, res) {
    Todos.remove({
      _id: req.params.taskId
    }, function(err, todo) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };