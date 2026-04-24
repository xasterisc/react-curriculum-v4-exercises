//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
// Empty dependency array: run once after first render (mount)
/*
* No dependency array (useEffect(() => {...})): 
The effect runs after every single render.
In this component, the effect updates the state (setCount).
Updating state forces the component to re-render, which immediately triggers the effect again, trapping the component in an infinite loop.

* Empty dependency array (useEffect(() => {...}, [])):
The empty array tells React that your effect doesn't depend on any external variables (like state or props) that might change.
Because it has no dependencies to watch for updates, React binds the effect strictly to the component's lifecycle.
*/
