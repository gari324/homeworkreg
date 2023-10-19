import "./Input.css";

export default function Input({
  submitted,
  inputValue,
  setInputValue,
  placeholder,
}) {
  return (
    <div className="reg123">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="fild"
        type="text"
        placeholder={placeholder}
      />
      {submitted && !inputValue ? (
        <span>Please enter a {placeholder}</span>
      ) : null}
    </div>
  );
}
