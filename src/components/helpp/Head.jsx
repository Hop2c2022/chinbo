import "../helpp/Head.css";
import { Button } from "react-bootstrap";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext } from "../../provider/ThemeContexrt";

export const Head = ({ color, path }) => {
  const { checked, handleChange } = useContext(ColorModeContext);
  return (
    <div
      className="w-100 d-flex flex-row justify-content-center align-items-center "
      style={{ heigh: "10vh" }}
    >
      <div className="w-50">
        <a href="/">
          <img style={{ width: "4vw" }} src="/logo.svg" alt="" />
        </a>
      </div>
      <div class="form-check form-switch form-check-reverse">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckReverse"
          onClick={() => {
            handleChange();
          }}
        />
      </div>
      <div className="w-50 d-flex flex-row justify-content-around">
        <Link
          className="link"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to="/info"
        />
        <a className="a" href="">
          Products
        </a>
        <a className="a" href="">
          Services
        </a>
        <a className="a" href="">
          Contact
        </a>
        <Link
          className="link"
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to="/login"
        >
          <div>Log In</div>
        </Link>
        <Link to={path}>
          <Button className="rounded border  border-2 border-dark text-dark a">
            Get access
          </Button>
        </Link>
      </div>
    </div>
  );
};
