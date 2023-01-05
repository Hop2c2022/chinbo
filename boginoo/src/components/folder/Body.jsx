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
              Нэвтрэх
            </h1>
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
          <p>Нууц үг</p>
          <input
            className="placeholder"
            style={{
              width: "381px",
              height: "44px",
              borderRadius: "60px",
              border: "none",
              boxShadow: " 0px 1px 5px rgba(0, 0, 0, 0.16)",
            }}
            type="password"
            placeholder="  ●●●●●●●●"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <div>
              <p style={{ color: "#02B589" }}>Намайг сана</p>
            </div>
            <Link className="nuuts" to="/forgot_pass">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  border: "none",
                  backgroundColor: "white",
                  marginTop: "20px",
                  textDecoration: "underline",
                }}
              >
                Нууц үгээ мартсан
              </button>
            </Link>
          </div>
          <Link className="link" to="/login">
            <button className="second">НЭВТРЭХ </button>
          </Link>
          <Link className="sign up" to="/signup">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                color: "#02B589",
                border: "none",
                backgroundColor: "white",
                textDecoration: "underline",
              }}
            >
              Шинэ хэрэглэгч бол энд дарна уу?{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
