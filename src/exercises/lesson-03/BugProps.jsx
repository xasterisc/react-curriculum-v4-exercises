// src/exercises/lesson-03/BugProps.jsx

import { useState } from 'react';

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
// Initialize state with the default greeting
// Use the setter function to update the value and trigger a re-render
/*
React does not track regular variables for UI updates; it only monitors changes made to State or Props.
By using the useState hook and its setter function (setMessage), we explicitly notify React that the data has changed, 
which forces the component to re-render and display the updated greeting.
*/
