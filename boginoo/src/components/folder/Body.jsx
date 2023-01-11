import "./Body.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Body = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const Logbutton = async () => {
    const asd = await axios.get(`http://localhost:8000/login/${email}`);
    if (password === asd?.data?.password) {
      console.log("success loged in");
      navigate("/");
    } else {
      console.log("failed");
    }
  };

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
              style={{
                color: "#02B589",
                fontWeight: "bold",
                margin: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Нэвтрэх
            </h1>
          </div>
          <p> Цахим хаяг</p>
          <input
            className="placeholder"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
            <div style={{ display: "flex", justifyContent: "row" }}>
              <input type="checkbox" />
              <div
                style={{
                  color: "#02B589",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Намайг сана
              </div>
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
            <button
              onClick={() => Logbutton()}
              className="second"
              style={{
                display: "flex",
                marginTop: "30px",
                width: "382px",
                height: "43px",
              }}
            >
              НЭВТРЭХ{" "}
            </button>
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
