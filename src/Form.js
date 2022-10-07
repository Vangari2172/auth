import React, { useState } from "react";
import "./Form.css";
import { validEmail, validPassword } from "./Regex.js";

const Form = () => {
  const [isClick, setIsClick] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    // if (!validEmail.test(email)) {
    //   setEmailErr(true);
    //   return;
    // }
    // if (!validPassword.test(password)) {
    //   setPwdError(true);
    //   return;
    // }
    if (!validPassword.test(password)) {
      setPwdError(true);
      return;
    }
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailErr(true);
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXYRD4M39HJU8hHEZJJRpPKmkDiLWU-wI",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => console.log(res));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-5" style={{ width: "40%" }}>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                setEmailErr(false);
              }
            }}
          />
          <div id="emailHelp" className="form-text" style={{ color: "red" }}>
            {emailErr ? "wrong email" : ""}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <div
            className="form-control"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type={isClick ? "text" : "password"}
              // className="form-control"
              // id="exampleInputPassword1"
              style={{
                border: "none",
                outline: "none",
                width: "95%",
              }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);

                if (validPassword.test(password)) {
                  setPwdError(false);
                }
              }}
            />

            <i
              className={
                isClick
                  ? "fa-sharp fa-solid fa-eye"
                  : "fa-sharp fa-solid fa-eye-slash"
              }
              onClick={() =>
                isClick === true ? setIsClick(false) : setIsClick(true)
              }
            ></i>
          </div>
          <div id="emailHelp" className="form-text" style={{ color: "red" }}>
            {pwdError ? "wrong password" : ""}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
