import React from 'react';

import { Button, Icon, Container } from 'semantic-ui-react';
import hot from './utils/hot';

const NextButton = ({ onExit }) => {
    return <Container textAlign='right'>
        <Button onClick={onExit}>Suivant <Icon name='arrow right' /></Button>
    </Container>
};

export default hot(module, NextButton);
