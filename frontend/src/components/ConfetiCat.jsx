import React, { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';
import catImage from '../assets/cat.svg'; // Replace with your image path

function ConfetiCat() {
  const confettiContainerRef = useRef(null);

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleButtonClick = () => {
      jsConfetti.addConfetti({
        confettiNumber: 15,
      });
    };

    const buttons = confettiContainerRef.current.querySelectorAll('.confeticat');
    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });

    return () => {
      // Cleanup function to remove event listeners if needed
    };
  }, []);

  return (
    <div ref={confettiContainerRef} className="buttons">
      <button className="confeticat">
        <img src={catImage} alt="Cat" width="50" height="50" />
      </button>
      {/* ... other buttons */}
    </div>
  );
}

export default ConfetiCat;