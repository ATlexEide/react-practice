export function Test() {
  const animals = ["animal 1", "animal 2", "animal 3"];
  const list = animals.map((animal) => {
    return <li key={animal}>{animal}</li>;
  });
  return <ul>{list}</ul>;
}
