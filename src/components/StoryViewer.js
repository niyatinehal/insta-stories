import React, { useEffect, useRef, useState } from 'react';

const StoryViewer = ({ stories, activeIndex, onClose }) => {
  const [current, setCurrent] = useState(activeIndex);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (current < stories.length - 1) setCurrent(current + 1);
      else onClose();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [current]);

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const width = e.currentTarget.clientWidth;
    clearTimeout(timerRef.current);

    if (x < width / 2) {
      if (current > 0) setCurrent(current - 1);
    } else {
      if (current < stories.length - 1) setCurrent(current + 1);
      else onClose();
    }
  };

  return (
    <div className="story-viewer" onClick={handleClick}>
      <img
        src={stories[current].image}
        alt={`Story ${current}`}
        className="story-image"
      />
    </div>
  );
};

export default StoryViewer;
