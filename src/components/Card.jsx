export default function Card({ contact, removeContact }) {
  const { name, email, id } = contact;
  return (
    <div className="card">
      <button className="card__remove-contact" onClick={removeContact} id={id}>
        X
      </button>
      <img
        className="card__img"
        src={`https://robohash.org/${name}.png?set=set4`}
        alt={`${name} cat avatar`}
      />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__email">{email}</p>
      </div>
    </div>
  );
}
