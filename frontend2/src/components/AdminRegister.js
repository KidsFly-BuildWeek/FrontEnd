
import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Big, } from './Styling'
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
      <Big>Register to KidsFly!</Big>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <input type="email" name="email" ref={register} />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" ref={register} />
        </label>
        <br></br>
        <label>
          <select name="role">

            <option value="traveler" >Traveler</option>
            <option value="admin" >Admin</option>

          </select>
        </label>
        <br />

        <input type="submit" value="Log In" />
      </form>
    </>
  );
};

export default AdminLogin;


