import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: nameInput,
    valueChangeHandler: nameHandler,
    isValid: nameIsValid,
    hasError: nameInputError,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    valueChangeHandler: emailHandler,
    isValid: emailIsValid,
    hasError: emailInputError,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const {
    value: lastnameInput,
    valueChangeHandler: lastnameHandler,
    isValid: lastnameIsValid,
    hasError: lastnameInputError,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastnameInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid && lastnameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInput, lastnameInput);

    if (emailInput.trim() === "" || nameInput.trim() === "" || lastnameInput.trim() === "") {
      return;
    }
    resetNameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  const firstnameInputClasses = nameInputError ? "form-control invalid" : "form-control";
  const lastnameInputClasses = lastnameInputError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={nameInput} onChange={nameHandler} onBlur={nameBlurHandler} />
          {nameInputError && <p className="error-text">Input a first name</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lastnameInput} onChange={lastnameHandler} onBlur={lastnameBlurHandler} />
          {lastnameInputError && <p className="error-text">Input a last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="name" value={emailInput} onChange={emailHandler} onBlur={emailBlurHandler} />
        {emailInputError && <p className="error-text">Input an email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
