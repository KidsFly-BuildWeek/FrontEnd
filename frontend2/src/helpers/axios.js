import axios from 'axios';

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem('token');

//   return axios.create({
//     baseURL: 'https://kids-flyy.herokuapp.com/api',
//     headers: {
//       Authorization: token
//     }
//   });
// }; 


/// if doesn't work try this



export default function withAuth() {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
  return axiosInstance;
}
