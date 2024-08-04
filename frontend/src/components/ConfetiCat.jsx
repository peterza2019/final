import React, { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';

function ConfetiCat() {
  const confettiContainerRef = useRef(null);

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleButtonClick = (button) => {
      const emoji = button.getAttribute('data-emoji');
      jsConfetti.addConfetti({
        emojis: [emoji],
        emojiSize: 70,
        confettiNumber: 15,
      });
    };

    const buttons = confettiContainerRef.current.querySelectorAll('.confeticat');
    buttons.forEach(button => {
      button.addEventListener('click', () => handleButtonClick(button));
    });

    return () => {
      // Cleanup function to remove event listeners if needed
    };
  }, []);

  return (
    <div ref={confettiContainerRef} className="buttons">
      <button className="confeticat" data-emoji="😽">😽</button>
      {/* ... other buttons */}
    </div>
  );
}

export default ConfetiCat;