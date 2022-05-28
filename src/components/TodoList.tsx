import React, { FC } from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface ITodoList {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: FC<ITodoList> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {
                todos.map(todo => (
                    <SingleTodo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                    />
                ))
            }
        </div>
    )
}

export default TodoList
