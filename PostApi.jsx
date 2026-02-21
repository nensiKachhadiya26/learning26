import axios from "axios";
import React, { useState } from "react";

export const PostApi = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async () => {

    const userObj = {
      name: name,
      age: age,
      email: email,
      password: password,
      isActive: true
    };

    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        userObj
      );

      setName("");
      setAge("");
      setEmail("");
      setPassword("");
      
      console.log(res.data);
      alert("User Added Successfully ✅");

    } catch (err) {
      console.log(err);
      alert("Error while adding user ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 2</h1>

      <div>
      <label> Name:</label>
      <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div>
        
        <label> Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <button onClick={addUser}>ADD</button>
    </div>
  );
};