import React, { useEffect, useState } from 'react';
import StoryViewer from './StoryViewer';


const StoryList = () => {
  const [stories, setStories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('/stories.json')
      .then(res => res.json())
      .then(data => setStories(data));
  }, []);
console.log(stories)
  return (
    <div>
      <div className="story-list">
        {stories.map((story, index) => (
          <img
            key={story.id}
            src={story.image}
            alt={`Story ${index}`}
            className="story-thumbnail"
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <StoryViewer
          stories={stories}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  );
};

export default StoryList;
