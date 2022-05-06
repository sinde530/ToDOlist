import React, { createContext, useReducer, useContext, useRef } from 'react'

// Context객체를 만들고 이 객체를 구독하고 있는 컴포넌트를 렌더링 할 떄
// React는 트리 상위에서 가장 가까이 있는 짝이 맞는 Provider로 부터 현재값을
// 읽게된다.
const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const initialTodos = [
    {
        id: 1,
        text: '아침 산책',
        done: true
    },
    {
        id: 2,
        text: '오늘의 뉴스 읽기',
        done: true
    },
    {
        id: 3,
        text: '점심 먹기',
        done: false
    },
    {
        id: 1,
        text: '스터디하기',
        done: false
    },
]

export default function TodoContext({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    return useContext(TodoStateContext);
}

export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}

export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}