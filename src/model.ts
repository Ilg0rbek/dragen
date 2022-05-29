export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

//import { useState } from "react";

// type Actions =
//     { type: "add", payload: string } |
//     { type: "remove", payload: string } |
//     { type: "done", payload: string }

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case 'add': return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
//         case 'remove': return state.filter(todo => todo.id !== action.payload)
//         case 'done': return state.map(todo => todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } )
//         default: return state;
//     }
// }

// const ReducerExample = () => {
//     const [state, dispatch] = useState(TodoReducer, [])
// }