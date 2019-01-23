import React from 'react';

import { Message, Button } from 'semantic-ui-react';
import hot from './utils/hot';

const MessageBox = ({ title, content, busy, values, onValidate, onCancel }) =>
  <Message className='messagebox'>
    <Message.Header className='title'>{title + (busy ? ' ...' : '')}</Message.Header>
    <Message.Content>
      {content}
      <div className='values'>{JSON.stringify(values)}</div>
    </Message.Content>
    <div className='buttons'>
      <Button primary className='button' onClick={onValidate}>Ok</Button>
      <Button secondary className='button' onClick={onCancel}>Cancel</Button>
    </div>
  </Message>;

export default hot(module, MessageBox);
