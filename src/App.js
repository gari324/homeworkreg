import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const formArray = [
    {
      inputValue: firstName,
      setInputValue: setFirstName,
      placeholder: "First Name",
    },
    {
      inputValue: lastName,
      setInputValue: setLastName,
      placeholder: "Last Name",
    },
    {
      inputValue: email,
      setInputValue: setEmail,
      placeholder: "Email",
    },
  ];

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="App">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        {formArray.map((input, index) => (
          <Input
            key={index}
            submitted={submitted}
            inputValue={input.inputValue}
            setInputValue={input.setInputValue}
            placeholder={input.placeholder}
          />
        ))}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default App;