const SnackList = () => {
  const snacks = [
    { name: 'Popcorn', rank: 5 },
    { name: 'Granola Bar', rank: 4 },
    { name: 'Pretzels', rank: 3 },
    { name: 'Potato Chips', rank: 2 },
    { name: 'Chocolate Chip Cookies', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>{snack.name}</li>
      ))}
    </ol>
  );
};

export default SnackList;
