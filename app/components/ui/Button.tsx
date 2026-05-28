export default function Button({ text }) {
  return (
    <button
      type="submit"
      className="w-full border border-b-blue-700 bg-blue-600 text-white shadow-xs px-2 py-1.5 rounded-sm"
    >
      {text}
    </button>
  );
}
