import styled from '@emotion/styled'
import React from 'react'
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button({
  background: '#38d9a9',
  '&:hover': {
    background: '#63e6be',
  },
  '&:active': {
    background: '#20c997',
  },
  zIndex: '5',
  cursor: 'pointer',
  width: '80px',
  height: '80px',
  display: 'block',
  alignItems:' center',
  justifyContent:' center',
  fontSize:' 60px',
  position: 'absolute',
  left: '50%',
  bottom: '0px',
  transform: 'translate(-50%, 50%)',
  color: 'white',
  borderRadius:' 50%',
  border: 'none',
  outline: 'none',
  display: 'flex',
  alignItems:'center;',
  justifyContent:'center',
  transition: '0.125s all ease-in'
})

function TodoCreate() {
  return (
    <div>TodoCreate     </div>
  )
}

export default TodoCreate