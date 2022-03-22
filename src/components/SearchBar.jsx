export default function SearchBar({ onTermSubmit }) {
  return (
    <input
      className="search-bar"
      type="text"
      onChange={onTermSubmit}
      placeholder="Search by name"
    />
  );
}
