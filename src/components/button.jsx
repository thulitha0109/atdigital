import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-secondary rounded hover:bg-secondary-dark uppercase text-white font-bold py-2 px-4 inline-flex w-fit items-center"
    >
      <span className="text-left">{children}</span>
    </button>
  );
};

export default Button;
