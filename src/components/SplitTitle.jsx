import React from 'react';

const SplitTitle = ({ text, className = "" }) => {
  if (!text) return null;
  
  const cleanText = text.trim();
  const words = cleanText.split(/\s+/);
  
  if (words.length > 1) {
    const halfIndex = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, halfIndex).join(" ");
    const secondHalf = words.slice(halfIndex).join(" ");
    return (
      <span className={className}>
        {firstHalf}{' '}
        <span className="title-second-half">{secondHalf}</span>
      </span>
    );
  } else {
    // Single word: split characters
    const mid = Math.ceil(cleanText.length / 2);
    const firstHalf = cleanText.substring(0, mid);
    const secondHalf = cleanText.substring(mid);
    return (
      <span className={className}>
        {firstHalf}
        <span className="title-second-half">{secondHalf}</span>
      </span>
    );
  }
};

export default SplitTitle;
