import { addDecorator } from '@storybook/react';
import {action} from '@storybook/addon-actions';
// import StoryRouter from 'storybook-react-router';

// addDecorator(StoryRouter({'*':action('router')}));

let stories = [
    'quizzmain',
    'question',
    'nextButton',
    'result',
];

stories.forEach(element => {
    require('./'+element);
});
