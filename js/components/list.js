// js/components/person-list.js
import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: "highlight",
            cardsText: []
        };    
    this.onAddInputChange = this.onAddInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onAddInputChange(event) {
        // console.log(event.target.value);
        console.log(this.refs.myInput.value);
    }

    onFormSubmit(e) {
      e.preventDefault();
      debugger;
      this.setState({cardsText: [...this.state.cardsText, this.refs.myInput.value]});

      
 //   this.state.cardsText.push(this.refs.myInput.value);
      console.log('Submit prevented');
    }

    render() {
        console.log(this.state.cardsText.length);
        const card = [];
        for (let i=0; i<this.state.cardsText.length; i++) {
            let newCard = this.state.cardsText[i];
            let key = `card${i}`;
            card.push(<Card text={newCard} key={key} />);
        }

        return (
            <div className="person-list {this.state.highlight}">
                <h2>{this.props.title}</h2>
                {card}

              <div className="person">
                    <form ref="form" onSubmit={this.onFormSubmit}>
                        <input type="text" ref="myInput" onChange={this.onAddInputChange} />
                        <input type="submit" value="submit" />
                    </form>
                </div>                 

            </div>
        );
    }
}

