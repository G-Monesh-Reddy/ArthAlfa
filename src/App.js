import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            replaceText: "",
            replaceFrom: "",
        };
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    getUniqueWordCount = (text) => {
        const words = text.toLowerCase().match(/\b\w+\b/g);
        if (!words) return 0;
        const uniqueWords = new Set(words);
        return uniqueWords.size;
    };

    getCharacterCount = (text) => {
        const filteredText = text.replace(/[^a-zA-Z0-9]/g, "");
        return filteredText.length;
    };

    handleReplaceAll = () => {
        const { text, replaceText, replaceFrom } = this.state;

        let updated = text.replace(replaceFrom, replaceText);
        this.setState({ text: updated });
    };

    render() {
        const { text, replaceText, replaceFrom } = this.state;

        return (
            <div className="App">
                <h1>Real-time Text Stats & String Replacement</h1>

                <textarea
                    value={text}
                    onChange={this.handleTextChange}
                    placeholder="Type your text here..."
                />

                <div className="stats">
                    <p>Unique Words: {this.getUniqueWordCount(text)}</p>
                    <p>
                        Characters (Excluding Spaces & Punctuation):{" "}
                        {this.getCharacterCount(text)}
                    </p>
                </div>

                <div className="replacement-section">
                    <input
                        type="text"
                        placeholder="Replace from..."
                        value={replaceFrom}
                        onChange={(e) =>
                            this.setState({ replaceFrom: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Replace with..."
                        value={replaceText}
                        onChange={(e) =>
                            this.setState({ replaceText: e.target.value })
                        }
                    />
                    <button onClick={this.handleReplaceAll}>Replace All</button>
                </div>

                <div className="highlighted-text">{text}</div>
            </div>
        );
    }
}

export default App;
