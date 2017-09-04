import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            highlight: !this.state.highlight
        });
    }

    render() {
        const classes = `card ${this.state.highlight ? 'highlight' : ''}`;
        // const name = 'This is a card!';

        return (
            <div className="card" key={this.props.text}>
                <div>
                    <p className="card-name">{this.props.text}</p>
                </div>
            </div>
        );
    }
}