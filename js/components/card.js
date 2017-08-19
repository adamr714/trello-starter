import React from 'react';

// export default function Card() {
//     const name = 'This is a card!';
//     return (
//         <div className="card">
//             <div className="card-name">{name}</div>
//         </div>
//     );
// }


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
        const name = 'This is a card!';

        return (
            <div className="card" key={this.props.text}>
                <div className="card-name">{this.props.text}</div>
            </div>
        );
    }
}