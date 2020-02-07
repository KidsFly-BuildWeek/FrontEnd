
import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Big, Regi, Log, Rap, Imps, Sell } from './Styling'
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
      <Regi>Register to KidsFly!</Regi>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Rap>
          Username:
          <Imps type="email" name="email" ref={register} />
        </Rap>
        <br />

        <Rap>
          Password:
          <Imps type="password" name="password" ref={register} />
        </Rap>
        <br></br>
        <Rap>
          <Sell name="role">

            <option value="traveler" >Traveler</option>
            <option value="admin" >Admin</option>

          </Sell>
        </Rap>
        <br />

        <Log type="submit" value="Log In" />
      </form>
    </>
  );
};

export default AdminLogin;


