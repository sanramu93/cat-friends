export default function AddContact({
  addContact,
  onNameChange,
  onEmailChange,
}) {
  return (
    <form className="add-contact" onSubmit={addContact}>
      <h2 className="add-contact__title">Add new contact</h2>
      <div className="add-contact__inputs">
        <input
          className="add-contact__name"
          type="text"
          placeholder="Name"
          required
          onChange={onNameChange}
        />
        <input
          className="add-contact__email"
          type="email"
          required
          placeholder="Email"
          onChange={onEmailChange}
        />

        <input type="submit" value="+" className="add-contact__submit" />
      </div>
    </form>
  );
}
