function Greeting() {
  return <p className="introduction">This is a very nice JSX greeting</p>;
}
function Header() {
  return (
    <header>
      <h1 id="main-header">Header</h1>
    </header>
  );
}
export { Greeting as JSXGreeting, Header as MainHeader };
