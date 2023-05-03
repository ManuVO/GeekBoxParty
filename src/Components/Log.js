import React, { Component } from 'react';
import './Log.css';

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: [],
            colors: {},
        };
    }

    componentDidMount() {
        this.addLine('System', 'Welcome to the game!');
    }

    addLine(nick, line) {
        const { colors } = this.state;

        if (!colors[nick]) {
            colors[nick] = this.getRandomColor();
        }

        const newLine = (lines) => (
            <li key={lines.length}>
                <span style={{ color: colors[nick] }}>{nick}:</span> {line}
            </li>
        );

        this.setState((prevState) => {
            return { lines: [...prevState.lines, newLine(prevState.lines)] };
        });
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <div className="log-container">
                <ul className="log-list">{this.state.lines}</ul>
            </div>
        );
    }
}

export default Log;
