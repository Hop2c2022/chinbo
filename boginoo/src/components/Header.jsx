import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [check, setCheck] = useState(false);

  const shalgah = () => {
    if (localStorage.getItem("user")) {
      setCheck(true);
    }
  };
  console.log(check);
  useEffect(() => {
    shalgah();
  }, shalgah);
  return (
    <div className="header">
      <h1 className="first">Хэрхэн ажилладаг вэ?</h1>
      {check ? (
        <div
          style={{
            color: "#02B589",
            marginRight: "30px",
            fontWeight: "bold",
            fontSize: "30px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {localStorage.getItem("user")}
          <button className="second" onClick={logout}>
            LOGOUT
          </button>
        </div>
      ) : (
        <Link className="link" to="/login">
          <button className="second">НЭВТРЭХ </button>
        </Link>
      )}
    </div>
  );
};
