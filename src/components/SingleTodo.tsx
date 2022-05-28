import React, { FC, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface ISingleTodo {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: FC<ISingleTodo> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map(v => v.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(v => v.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number)  => {
        e.preventDefault()
        setTodos(todos.map(v => (
            v.id === id ? { ...todo, todo: editTodo } : todo
        )))
        setEdit(false)
    }

    return (
        <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>

            {
                edit ? (
                    <input
                        type="text"
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                    />
                ) : (
                    todo.isDone ? (
                        <s className="todo_single--text">{todo.todo}</s>
                    ) : (
                        <span className="todo_single--text">{todo.todo}</span>
                    )
                )
            }

            <div>
                <span className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit)
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
            </div>
        </form >
    )
}

export default SingleTodo
