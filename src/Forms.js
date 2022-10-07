// import React, { useState } from "react";
// import { validEmail, validPassword } from "./Regex.js";

// // const signUpURL =
// //   ;
// // const signInURL =
// //   ;

// const Forms = () => {
//   const [isClick, setIsClick] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailErr, setEmailErr] = useState(false);
//   const [pwdError, setPwdError] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);
//   const [urlLink, setUrlLink] = useState(null);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     // if (!validEmail.test(email)) {
//     //   setEmailErr(true);
//     //   return;
//     // }
//     if (!validPassword.test(password)) {
//       setPwdError(true);
//       return;
//     }
//     if (email.match("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")) {
//       alert("yes");
//     } else {
//       alert("no");
//     }
//     if (isLogin) {
//       setUrlLink(
//         "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXYRD4M39HJU8hHEZJJRpPKmkDiLWU-wI"
//       );
//     } else {
//       setUrlLink(
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXYRD4M39HJU8hHEZJJRpPKmkDiLWU-wI"
//       );
//     }

//     fetch(urlLink, {
//       method: "POST",
//       body: JSON.stringify({
//         email: email,
//         password: password,
//         returnSecureToken: true,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((res) => console.log(res));
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <div className="container mt-5" style={{ width: "40%" }}>
//       <h2>{isLogin ? "SignUp Page" : "Login Page"}</h2>
//       <form onSubmit={submitHandler}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//               if (validEmail.test(email) && email.includes(".")) {
//                 setEmailErr(false);
//               }
//             }}
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text" style={{ color: "red" }}>
//             {emailErr ? "wrong email" : ""}
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <div
//             className="form-control"
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <input
//               type={isClick ? "text" : "password"}
//               value={password}
//               id="exampleInputPassword1"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 if (validPassword.test(password)) {
//                   setPwdError(false);
//                 }
//               }}
//               style={{
//                 border: "none",
//                 outline: "none",
//               }}
//             />
//             <i
//               className={
//                 isClick
//                   ? "fa-sharp fa-solid fa-eye"
//                   : "fa-sharp fa-solid fa-eye-slash"
//               }
//               onClick={() =>
//                 isClick === true ? setIsClick(false) : setIsClick(true)
//               }
//             ></i>
//           </div>
//           <div id="emailHelp" className="form-text" style={{ color: "red" }}>
//             {pwdError ? "wrong password" : ""}
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//       <p
//         onClick={() => {
//           if (!isLogin) {
//             setIsLogin(true);
//           } else {
//             setIsLogin(false);
//           }
//         }}
//       >
//         {isLogin ? "Login" : "signUp"}
//       </p>
//     </div>
//   );
// };

// export default Forms;
