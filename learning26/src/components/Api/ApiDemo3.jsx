import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ApiDemo3 = () => {
  const { register, handleSubmit, reset } = useForm();

  const submithandler = async (data) => {
    data.isActive = data.isActive === "true";
    try {
      await axios.post("https://node5.onrender.com/user/user/", data);
      reset();
      alert(" Data submitted successfully!");
    } catch (err) {
      console.error(" Error sending data to server:", err.response || err.message);
      alert(" Error sending data. Check console.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Api Demo 3</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div >
          <label>Name:</label><br />
          <input type="text" {...register("name")} required />
        </div>

        <div >
          <label>Email:</label><br />
          <input type="email" {...register("email")} required />
        </div>

        <div >
          <label>Password:</label><br />
          <input type="password" {...register("password")} required />
        </div>

        <div >
          <label>Age:</label><br />
          <input type="number" {...register("age")} required />
        </div>

        <div >
          <label>Is Active:</label><br />
          True <input type="radio" value="true" {...register("isActive")} />
          False <input type="radio" value="false" {...register("isActive")} />
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            style={{ padding: "8px 20px", cursor: "pointer" }}
          />
        </div>
      </form>
    </div>
  );
};
