// js/components/person-list.js
import React from 'react';
import CardList from './list';

export default function Board(props) {
        let cardLists = [];

        props.lists.map( (title, index) => {
            let key=`list${index}`;
            cardLists.push(<CardList title={title} Key={key}/>)
        });
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="card-list">
                {cardLists}
            </div>
        </div>
    );
}


