import React from "react";
import useState from "react";

export default function betfair() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.valu] });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
