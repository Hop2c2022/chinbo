import "./Body.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Body = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const Usbutton = async () => {
    if (password === password2) {
      const res = await axios.post("http://localhost:8000/user", {
        name: name,
        password: password,
        email: email,
      });
      console.log(res);
      navigate("/login");
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
              Бүртгүүлэх
            </h1>
          </div>
          <p> Нэр</p>
          <input
            onChange={(e) => setName(e.target.value)}
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
            placeholder="   Нэр"
          />
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
            onChange={(e) => setPassword(e.target.value)}
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
          <p>Нууц үг давтна уу</p>
          <input
            onChange={(e) => setPassword2(e.target.value)}
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
          <button
            onClick={Usbutton}
            className="second"
            style={{
              display: "flex",
              marginTop: "30px",
              width: "382px",
            }}
          >
            Бүртгүүлэх{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
