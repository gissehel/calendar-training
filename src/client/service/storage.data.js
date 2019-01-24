export const dataMapping = {
    'state.todo.list': {
        path: ['todo'],
        key: 'list',
        formatGet: (value) => JSON.stringify(value ? value : null),
        formatSet: (value) => value ? JSON.parse(value) : {},
    },
};
