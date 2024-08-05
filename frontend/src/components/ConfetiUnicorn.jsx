import React, { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';
import catImage from '../assets/unicorn.svg'; // Replace with your image path

function ConfetiUnicorn() {
  const confettiContainerRef = useRef(null);

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleButtonClick = () => {
      jsConfetti.addConfetti({
        confettiNumber: 15,
      });
    };

    const buttons = confettiContainerRef.current.querySelectorAll('.confetiunicorn');
    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });

    return () => {
      // Cleanup function to remove event listeners if needed
    };
  }, []);

  return (
    <div ref={confettiContainerRef} className="buttons">
      <button className="confetiunicorn">
        <img src={catImage} alt="Unicorn" width="50" height="50" />
      </button>
      {/* ... other buttons */}
    </div>
  );
}

export default ConfetiUnicorn;