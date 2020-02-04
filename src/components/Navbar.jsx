import "./styles/Navbar.css";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { updateCurView } from "../redux/actions";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="navbar">
        <div
          className="navbarItem"
          onClick={() => dispatch(updateCurView("practiceChoices"))}
        >
          Practice
        </div>
        <div
          className="navbarItem"
          onClick={() => dispatch(updateCurView("practiceChoices"))}
        >
          Home
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
