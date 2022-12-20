import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smilling eyes",
  " 🗿 ": "The Chad",
  "🔥": "you're on fire",
  "❤️": "love",
  "✨": "sparkle",
  " 😋 ": "I see food",
  " 🍕": "Pizzzzaa!!",
  "🤯": "Exploding Head",
  "🤯 ": "Khushi ke anso!",
  "🫘": "Spilling the beans!"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiEventHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="h1">EMOJIBOT</h1>
      <input onChange={emojiEventHandler}></input>

      <div className="output">{meaning}</div>

      <h2 className="h2">EMOJI'S WE KNOW</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            className="emojiWeKnow"
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
