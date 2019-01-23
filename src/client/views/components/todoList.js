import React from 'react';
import { List } from 'semantic-ui-react';
import hot from './utils/hot';

import './todoList.css';

const TodoList = ({ list, onItemSelected }) =>
    <List bulleted>
        {
            Object.entries(list).map( ([item, isTodo]) =>
                <List.Item key={item} className={isTodo ? 'todo' : 'done'} onClick={e => onItemSelected(item)}>{item}</List.Item>
            )
        }
    </List>;

export default hot(module, TodoList);
