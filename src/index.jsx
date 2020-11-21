import React from 'react';
import { render } from 'react-dom';
import { Joke } from './components/joke/index.jsx';
import './index.html';
import { jokes } from './jokes.js';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
          <Joke
            key={joke.id}
            id={joke.id}
            name={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
