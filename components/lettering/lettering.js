import React from 'react';
import './lettering.css';

const Lettering = ({ text = [], title = '', p = '' }) => {
  const renderText = () => {
    return text && text.length
      ? text.map((line, index) => {
          return <p key={`${index}`}>{line}</p>;
        })
      : null;
  };

  return (
    <div className={"lettering" + (p == 'umi' ? " umi" : p == 'shimi' ? " shimi" : '')}>
      <h1>{title}</h1>
      {renderText()}
    </div>
  );
};

export default Lettering;
