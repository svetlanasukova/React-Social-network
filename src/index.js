import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Sveta'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Kate'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valery'}
];
let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
];
let posts = [
    {id: 1, message: 'Hi!', likesCount: 10},
    {id: 2, message: 'How are you?', likesCount: 15},
    {id: 3, message: 'Hi, how are you?', likesCount: 17},
    {id: 4, message: 'Its my first post', likesCount: 14},
    {id: 5, message: 'Yo', likesCount: 18}
];


ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
