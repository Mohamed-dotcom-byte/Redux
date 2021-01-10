import React from 'react'
import {useSelector} from 'react-redux';
import Task from './Task';

    const handleFilter = (todo, filter) => {
        switch (filter) {
          case 'done':
            return todo.filter((el) => el.isDone);
          case 'undone':
            return todo.filter((el) => !el.isDone);
          default:
            return todo.filter((el) => el);
        }
      };


const ToDoList = () => {
    const todo = useSelector((state) => state.todoReducer.todo);
    const filter = useSelector((state) => state.todoReducer.filter);
    const newtasks= handleFilter(todo,filter);
    return (
        <div>
            {newtasks.map((task) => (
            <Task key={task.id} {...task} />
        ))}
        </div>
    );
};

export default ToDoList
