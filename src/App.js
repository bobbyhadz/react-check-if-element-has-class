import './App.css';

import {useEffect, useRef} from 'react';

export default function App() {
  const ref = useRef(null);

  // 👇️ Check if the element contains a class on mount
  useEffect(() => {
    if (ref.current.classList.contains('my-class')) {
      console.log('Element contains class');
    } else {
      console.log('Element does NOT contain class');
    }
  }, []);

  // 👇️ Check if the element contains a class on click
  const handleClick = event => {
    if (event.currentTarget.classList.contains('my-class')) {
      console.log('Element contains class');
    } else {
      console.log('Element does NOT contain class');
    }
  };

  return (
    <div>
      <div ref={ref} className="my-class" onClick={handleClick}>
        Hello world
      </div>
    </div>
  );
}
