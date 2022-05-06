import styled from '@emotion/styled'
import React from 'react'
import { useTodoState } from './TodoContext'

const TodoHeaderBlock = styled.div({
    '&  h1' :{
        margin: '0',
        fontSize: '36px',
        color: '#343a40',
    },
    '& .day' : {
        marginTop: '4px',
        color: '#868e94',
        fontSize: '21px',
    },
    paddingTop: '48px',
    paddingLeft: '32px',
    paddingRight: '32px',
    borderBottom: '1px solid #e9ecef',
})

const TasksLeft = styled.div({
    color: '#20c997',
    fontSize: '18px',
    marginTop: '40px',
    fontWeight: 'bold',
})

function TodoHead() {
    const today = new Date();

    const dateString = today.toLocaleString('ko', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const dayName = today.toLocaleString('ko', {weekday: 'long'});
    const todos = useTodoState();
    const undoneTaske = todos.filter(todo => !todo.done);

  return (

    <TodoHeaderBlock>
        <h1>{dateString}</h1>
        <div className='day'>{dayName}</div>
        <TasksLeft> 할 일 </TasksLeft>
    </TodoHeaderBlock>
  )
}

export default TodoHead