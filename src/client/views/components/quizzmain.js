import React from 'react';

import { Segment, Button } from 'semantic-ui-react';
import { bindKey, unbindKey } from './utils/KeyboardManager';

import './quizzmain.css';

class QuizzMain extends React.Component {
    componentDidMount() {
        bindKey(()=>this.props.onStart(),' ')
    }
    componentWillUnmount() {
        unbindKey(' ')
    }
    render() {
        let { onStart } = this.props;

        return <Segment>
            <Button onClick={() => onStart()}>Start</Button>
        </Segment>
    }
}

export default QuizzMain;
