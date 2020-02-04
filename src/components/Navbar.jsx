import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { updateCurView } from "../redux/actions";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <button onClick={() => dispatch(updateCurView("listeningOptions"))}>
        Practice
      </button>
    </Fragment>
  );
};

export default Navbar;
