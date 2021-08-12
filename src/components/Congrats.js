import React from 'react';

const Congrats = ({ isGuessed }) => {
  if (isGuessed) {
    return (
      <div data-test="congrats-component">
        <span data-test="congrats-message">You Guessed The Word!</span>
      </div>
    )
  } else {
    return (
      <div data-test="congrats-component">
      </div>
    )
  }
};

export default Congrats;
