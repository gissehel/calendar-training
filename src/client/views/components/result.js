import React from 'react';

import { Message, Button } from 'semantic-ui-react';
import { bindKey, unbindKey } from './utils/KeyboardManager';

import './question.css';

class Result extends React.Component {
    componentDidMount() {
        bindKey(()=>this.props.onExit(),' ')
    }
    componentWillUnmount() {
        unbindKey(' ')
    }
    render() {
        let { rightAnswersCount, wrongAnswersCount, averageTime, averageTimeRight, averageTimeWrong, onExit } = this.props;
        return <Message className='messagebox'>
            <Message.Header className='title'>{rightAnswersCount}/{rightAnswersCount + wrongAnswersCount}</Message.Header>
            <Message.Content>
                <p></p>
                <p>Right count : <b>{rightAnswersCount}</b></p>
                <p>Wrong count : <b>{wrongAnswersCount}</b></p>
                <p>Average time : <b>{averageTime}</b></p>
                <p>Average time right : <b>{averageTimeRight}</b></p>
                <p>Average time wrong : <b>{averageTimeWrong}</b></p>
                <Button onClick={() => onExit()}>Exit</Button>
            </Message.Content>
        </Message>
    }
}

export default Result;
