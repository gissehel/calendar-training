import React from 'react';

import { Segment, Message, Button } from 'semantic-ui-react';
import hot from './utils/hot';

import './quizzmain.css';

const QuizzMain = ({ onStart }) =>
    <Segment>
        <Button onClick={()=>onStart()}>Start</Button>
    </Segment>
;

export default hot(module, QuizzMain);
