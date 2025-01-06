function ContactInputs({
  lableFor,
  lable,
  type,
  id,
  placeholder,
  cn,
  className,
  rows,
  value,
  setValue,
}) {
  return (
    <div>
      <label
        htmlFor={lableFor}
        className={`block text-sm font-medium text-gray-300 ${cn}`}
      >
        {lable}
      </label>
      {!rows ? (
        <input
          type={type}
          id={id}
          className={`mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <textarea
          id={id}
          rows={rows}
          className={`${className} mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      )}
    </div>
  );
}

export default ContactInputs;
