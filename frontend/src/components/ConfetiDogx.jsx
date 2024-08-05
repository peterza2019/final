import React, { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';


function ConfettiButtonsb() {
  const confettiContainerRef = useRef(null);

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleButtonClick = (button) => {
      const emoji = button.getAttribute('data-emoji');
      jsConfetti.addConfetti({
        emojis: [emoji],
        emojiSize: 30,
        confettiNumber: 20,
      });
    };

    const buttons = confettiContainerRef.current.querySelectorAll('.confettiButton');
    buttons.forEach(button => {
      button.addEventListener('click', () => handleButtonClick(button));
    });

    return () => {
      // Cleanup function to remove event listeners if needed
    };
  }, []);

  return (
    <div ref={confettiContainerRef} className="buttons">
    <button className="confettiButton" data-emoji="🐶" style={{ fontSize: '50px' }}>🐶 </button>
    {/* ... other buttons */}
  </div>
  );
}

export default ConfettiButtonsb;