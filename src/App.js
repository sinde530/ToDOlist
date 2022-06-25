import styled from '@emotion/styled';
import TodoContext from './components/TodoContext';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const Background = styled.div({
  backgroundColor: '#e9ecef'
})



function App() {
  return (
    <TodoContext>
      <Background>
        <TodoTemplate>
          <TodoHead/>
          <TodoList/>
          <TodoCreate/>
        </TodoTemplate>
      </Background>
    </TodoContext>
  );
}

export default App;
