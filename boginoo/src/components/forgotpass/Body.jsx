import "./Body.css";
import { Link } from "react-router-dom";
export const Body = () => {
  return (
    <div className="body">
      <div className="d-flex-bugd-center">
        <div
          style={{
            width: "383px",
            height: "812px",
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <img style={{ height: "118px" }} src="logo.svg" alt="" />
          <div className="d-flex-bugd-center">
            {" "}
            <h1
              style={{ color: "#02B589", fontWeight: "bold", margin: "40px" }}
            >
              Нууц үг сэргээх
            </h1>
            <div>
              Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
            </div>
          </div>
          <p> Цахим хаяг</p>
          <input
            className="placeholder"
            style={{
              width: "381px",
              height: "44px",
              borderRadius: "60px",
              border: "none",
              boxShadow: " 0px 1px 5px rgba(0, 0, 0, 0.16)",
              marginRight: "1vw",
            }}
            type="text"
            placeholder="   name@mail.domain"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
          </div>
          <Link className="link" to="/login">
            <button className="second"> Илгээх</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
