function ListElement(props) {
  return <li>{props.animal}</li>;
}
export function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListElement key={animal} animal={animal} />;
      })}
    </ul>
  );
}
export function FullList(props) {
  return <List animals={props.animals} />;
}
const bool = false;
export function PrintBool() {
  if (bool) return <h1>Is true</h1>;
}
