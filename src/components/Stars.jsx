import React from 'react';

const StarryBackground = () => {
  const stars = Array.from({ length: 100 }).map((_, index) => {
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    const left = Math.random() * 100; // Random left position
    const top = Math.random() * 100; // Random top position
    const animationDelay = Math.random() * 2; // Random delay for blinking

    return (
      <div
        key={index}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          top: `${top}vh`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    );
  });

  return <>{stars}</>;
};

export default StarryBackground;
