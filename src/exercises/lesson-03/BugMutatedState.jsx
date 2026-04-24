// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
// Instead of modifying the variable itself, we should pass the new value directly to the setter function or use a functional update.
// Switching from let to const prevents accidental direct mutations like count++ by throwing a development error.
/*
The original code used count++, which is a direct mutation of the state variable.
Because React uses shallow comparison to determine if a state change has occurred,
mutating the variable directly can prevent React from "noticing" the change, 
meaning it won't trigger a re-render.
By changing the call to setCount(count + 1), we provide React with a brand-new value.
This triggers the reconciliation process, allowing React to detect the change and update the DOM to reflect the new count.
*/
