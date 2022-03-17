export default function AddContact({
  addContact,
  onNameChange,
  onEmailChange,
}) {
  return (
    <form className="add-contact" onSubmit={addContact}>
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

      <input type="submit" value="+" />
    </form>
  );
}
