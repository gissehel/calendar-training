import React from 'react';

import { Container } from 'semantic-ui-react';

import MessageBox from "../containers/messageBox";
import TodoNewItem from "../containers/todoNewItem";
import TodoList from "../containers/todoList";
import hot from './utils/hot';

const MainPage = () =>
  <Container>
    <h1>This is a test</h1>
    <MessageBox />
    <TodoNewItem />
    <TodoList />
  </Container>
  ;

export default hot(module, MainPage);
