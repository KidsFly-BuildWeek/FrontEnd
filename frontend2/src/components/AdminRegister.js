import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AdminLogin = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    axiosWithAuth()
      .post("https://kids-fly-be.herokuapp.com/api/auth/register", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("server response", res.data);
        props.history.push("/admin");
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <>
      <h1>Register to KidsFly!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <input type="text" name="email" ref={register} />
        </label>
        <br />

        <label>
          Password:
          <input type="text" name="password" ref={register} />
        </label>
        <br />

        <input type="submit" value="Log In" />
      </form>
    </>
  );
};

export default AdminLogin;


