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
            marginTop: "20px",
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
            <div
              style={{
                fontStyle: "normal",
                fontWeight: "400px",
                fontSize: "16px",
                color: "black",
                textAlign: "center",
              }}
            >
              Бид таны цахим хаяг руу нууц үг <br /> сэргээх хаяг явуулах болно.
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
            }}
          >
            <p> Цахим хаяг</p>
            <input
              className="placeholder"
              style={{
                marginTop: "15px",
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            {" "}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            <Link className="link" to="/login">
              <button
                className="second"
                style={{
                  display: "flex",
                  width: "380px",
                  height: "43px",
                  borderRadius: "100px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Илгээх
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
