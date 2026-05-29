export default function FormField({ label, name, type = "text", placeholder, inputProps, error }) {
  return (
    <>
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full px-2 py-1.5 border border-gray-200 rounded-sm"
        {...inputProps}
      ></input>
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </>
  );
}