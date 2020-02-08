import React from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Navigation(props) {
  const { login, register, logout, trips } = props;
  const history = useHistory();

  const onLogout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="https://confident-easley-aafc81.netlify.com/">
     
        Kids Fly
      </a>
      <ul className="navbar-nav">
        {login ? (
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Login
            </NavLink>
          </li>
        ) : null}
        {register ? (
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        ) : null}
        {trips ? (
          <li className="nav-item">
            <NavLink className="nav-link" to="/traveller">
              Trips
            </NavLink>
          </li>
        ) : null}
        {logout ? (
          <li className="nav-item">
            <a className="nav-link" onClick={onLogout} href="/">
              Logout
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
