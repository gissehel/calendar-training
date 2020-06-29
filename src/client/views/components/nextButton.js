import React from 'react';

import { Button, Icon, Container } from 'semantic-ui-react';
import { bindKey, unbindKey } from './utils/KeyboardManager';

class NextButton extends React.Component {
    componentDidMount() {
        bindKey(() => this.props.onExit(), ' ');
    }
    componentWillUnmount() {
        unbindKey(' ');
    }
    render() {
        let { onExit } = this.props;
        return <Container textAlign='right'>
            <Button onClick={onExit}>Suivant <Icon name='arrow right' /></Button>
        </Container>
    }
}

export default NextButton;
