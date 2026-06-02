export default function Button({ text, disabled }: { text: string; disabled?: boolean }) {
  return (
    <button
      type="submit"
      className="w-full border border-b-blue-700 bg-blue-600 text-white shadow-xs px-2 py-1.5 rounded-sm hover:bg-blue-700 hover:cursor-pointer disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {text}
    </button>
  );
}
