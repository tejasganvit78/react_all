import React from "react";

function Register() {
  function handleRegister(event) {
    event.preventDefault();
    console.log("hello world");
  }

  let age = 20;
  let emailId = "tej@gmail.com";

  let data = [
    {
      name: "Tejas",
      email: "teju@gmail.com",
      rollNo: "75",
    },
    {
      name: "piyu",
      email: "piyu@gmail.com",
      rollNo: "71",
    },
    {
      name: "urmi",
      email: "bitu@gmail.com",
      rollNo: "77",
    },
    {
      name: "teju",
      email: "guddi@gmail.com",
      rollNo: "21",
    },
  ];

  return (
    <div>
      {data.map((name, email, rollNo) => (
        <div>
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{rollNo}</h1>
        </div>
      ))}
    </div>
  );
}

export default Register;

// Conditional Rendering
