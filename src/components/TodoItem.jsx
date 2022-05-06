import styled from '@emotion/styled'
import React from 'react'
import { useTodoDispatch } from './TodoContext'
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#dee2e6',
    fontSize: '24px',
    cursor: 'pointer',
    '&:hover': {
        color: '#ff6b6b',
    },
    display: 'noen',
})

const TodoItemBlock = styled.div({
    display: 'flex',
    alignItems: 'center',
    paddingTop: '12px',
    paddingBottom: '12px',
    '&:hover': {
        '$:{Remove}': {
            display: 'inital',
        }
    }
})

const CheckCircle = styled.div({
    width: '32px',
    height: '32px',
    borderRadius: '16px',
    border: '1px solid #ced4da',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    cursor: 'pointer',
})

const Text = styled.div({
    flex: '1',
    fontSize: '21px',
})

function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();

    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id
        });
    };

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id
        });
    };

    return (
        <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
    )
}

export default TodoItem