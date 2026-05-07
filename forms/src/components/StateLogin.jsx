import { useRef, useState } from "react";
export default function StateLogin() {
  const emailRef = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState();
  const passwordRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enetedPassword = passwordRef.current.value;
    console.log("Entered Email : ", enteredEmail);
    console.log("Entered Password : ", enetedPassword);
    const isEmailValid = enteredEmail.includes("@");
    if (!isEmailValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log("Sending http request.....");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={emailRef} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
