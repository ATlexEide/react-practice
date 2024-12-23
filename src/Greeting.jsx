function Greeting() {
  return <p>This is a very nice JSX greeting</p>;
}
function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}
export { Greeting as JSXGreeting, Header as MainHeader };
