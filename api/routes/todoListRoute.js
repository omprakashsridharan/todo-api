'use strict';
module.exports = (app)=>{
    var todolist = require('../controllers/todoListController')

    app.route('/tasks')
        .get(todolist.listAllTodos)
        .post(todolist.createTodo)

    app.route('/tasks/:taskId')
        .get(todolist.readTodo)
        .put(todolist.updateTodo)
        .delete(todolist.deleteTodo);
}