import React from "react";
import { useState } from "react";

export default function betfair() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://identitysso.betfair.com/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "X-Application": "oTY1y8QkfuVZeGY4",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(`username=${username}&password=${password}`),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleChangeName = (e) => {
    setFormData({ ...formData, [e.target.username]: [e.target.value] });
  };

  const handleChangePwd = (e) => {
    setFormData({ ...formData, [e.target.password]: [e.target.value] });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          username="username"
          onChange={handleChangeName}
        />

        <label htmlFor="email">password</label>
        <input
          type="email"
          id="email"
          password="password"
          onChange={handleChangePwd}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
