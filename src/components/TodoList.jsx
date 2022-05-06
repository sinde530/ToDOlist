import styled from '@emotion/styled'
import React from 'react'
import { useTodoState } from './TodoContext'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div({
    flex: '1',
    padding: '20px 32px',
    paddingBottom: '48px',
    overflowY: 'auto',
})

function TodoList() {
    const todos = useTodoState();

  return (
    <TodoListBlock>
        {todos.map( todo => (
            <TodoItem
                id={todo.id}
                text={todo.text}
                done={todo.done}
                key={todo.id}
            />
        ))}
    </TodoListBlock>
  )
}

export default TodoList