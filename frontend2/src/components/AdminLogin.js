// import React from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import {CardWrapper, CardHeader,CardHeading,CardBody,
//  CardFieldset,CardInput
//   ,CardButton,CardLink
// } from "./AdminSC"; 





// class AdminLogin extends React.Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//    login = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post('https://reqres.in', 
//         this.state.credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload);
//         console.log(res.data.payload);
//         this.props.history.push('/protected'); //this is where the auth login will take me.
//       })
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.login}>
//         <CardWrapper>

//         <CardHeader>
//           <CardHeading> Admin Login </CardHeading>
//         </CardHeader>

//         <CardBody>

//           <CardFieldset>
//             <CardInput placeholder="Username" type="text" required />
//           </CardFieldset>

//           <CardFieldset>
//             <CardInput placeholder="Password" type="password" required />
//           </CardFieldset>

//           <CardFieldset>
//             <CardButton type="button">Sign In</CardButton>
//           </CardFieldset>

//           <CardFieldset>
//             <CardLink> Add link here later to reg page... </CardLink>
//           </CardFieldset>

//         </CardBody>

//       </CardWrapper>
//       </form>
//       </div>
//     );
//   }
//  }
//  export default AdminLogin;

import React from "react";
import {useForm} from "react-hook-form";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const AdminLogin = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    axiosWithAuth()
      .post("https://kids-fly-be.herokuapp.com/api/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log ("server response" , res.data);
        props.history.push("/protected");
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <>
      <h1>Welcome to KidsFly!</h1>
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
 
 
