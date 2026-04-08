//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Mohamed';
  const age = 40;
  const hobbies = [
    'hiking',
    'traveling',
    'listening to music',
    'playing games',
    'learning new things',
  ];

  return (
    <div>
      {/* add JSX here */}
      <h1>About {name}</h1>
      <p>
        Hi! I&apos;m {age} years old and work as a software developer. In my
        free time, I enjoy:
      </p>
      <ul>
        {hobbies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
