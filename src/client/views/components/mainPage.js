import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import MessageBox from "../containers/messageBox";
import TodoNewItem from "../containers/todoNewItem";
import TodoList from "../containers/todoList";
import hot from './utils/hot';

const MainPage = () =>
  <Container>
    <Header as='h1'>This is a test</Header>
    <MessageBox />
    <TodoNewItem />
    <TodoList />
  </Container>
  ;

export default hot(module, MainPage);
