import { addDecorator } from '@storybook/react';
import {action} from '@storybook/addon-actions';
// import StoryRouter from 'storybook-react-router';

// addDecorator(StoryRouter({'*':action('router')}));

let stories = [
    'messageBox',
    'todoList',
    'todoNewItem',
];

stories.forEach(element => {
    require('./'+element);
});
