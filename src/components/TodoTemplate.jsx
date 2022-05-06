import styled from '@emotion/styled'
import React from 'react'

const TodoTemplateBlock = styled.div({
    width: '512px',
    height: '768px',
    background: 'white',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.04)',
    margin: '0 auto',
    marginTop: '96px',
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
})

function TodoTemplate({children}) {
  return (
    <TodoTemplateBlock>{children}</TodoTemplateBlock>
  )
}

export default TodoTemplate