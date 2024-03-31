import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

function TodoList({todoProps}) {
    return (
        <div>
            {todoProps.map(todo => (
                <TodoItem todoItem={todo} key={todo.id} />
            ))}
        </div>
    )
}

export default TodoList
