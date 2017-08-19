require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import BoardList from './components/board';

// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(<BoardList />, document.getElementById('app'))
// );

document.addEventListener('DOMContentLoaded', () => {
    let titles = ['Good Ideas', 'Bad Ideas', 'Not Sure Either Way'];
    let names = ["this is a card", "this is another card", "and yet one mre..."];
    ReactDOM.render(<BoardList title="Trello Example" lists = {titles} />, document.getElementById('app'))
    }
);


// document.addEventListener('DOMContentLoaded', () => {
//     let titles = ['title one', 'title two', 'title three', 'title four'];
//     let names = ["this is a card", "this is another card", "and yet one mre..."];
//     ReactDOM.render(<Board title="trello sheet" lists = {titles} content = {names}/>, document.getElementById('app'))
//     }
// );