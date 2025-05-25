import React, {useEffect, useState} from 'react';
import StoryList from './components/StoryList';
import './index.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="desktop-warning">
        <p>This app is only available on mobile devices.</p>
      </div>
    );
  }

  
  return (
    <div className="App">
      <StoryList />
    </div>
  );
}

export default App;
