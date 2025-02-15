export function Card({ children, title }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="card-content">{children}</div>
    </div>
  );
}

export function Profile() {
  return (
    <div>
      <Card title="photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="about">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
