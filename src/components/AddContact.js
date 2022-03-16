export default function AddContact({ addContact }) {
  return (
    <div className="add-contact">
      <input className="add-contact__name" type="text" placeholder="Name" />
      <input className="add-contact__email" type="text" placeholder="Email" />
      <button type="submit" onClick={addContact}>
        +
      </button>
    </div>
  );
}
