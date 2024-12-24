function ListElement(props) {
  return <li>{props.animal}</li>;
}
export function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListElement animal={animal} />;
      })}
    </ul>
  );
}
export function FullList(props) {
  return <List animals={props.animals} />;
}
