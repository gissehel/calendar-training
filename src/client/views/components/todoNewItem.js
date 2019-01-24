import React from 'react';
import { Input, Form, Button } from 'semantic-ui-react';
import hot from './utils/hot';

const TodoNewItem = ({ current, onNew, onUpdateCurrent }) =>
    <div className='newItem'>
        <Form onSubmit={e => {
            e.preventDefault();
            onNew(current);
        }}>
            <Input value={current} onChange={e => onUpdateCurrent(e.target.value)} />
            <Button type="submit">Add new item</Button>
        </Form>
    </div>
    ;

export default hot(module, TodoNewItem);