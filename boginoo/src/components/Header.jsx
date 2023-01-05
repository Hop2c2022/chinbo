import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">
      <h1 className="first">Хэрхэн ажилладаг вэ?</h1>

      <Link className="link" to="/login">
        <button className="second">НЭВТРЭХ </button>
      </Link>
    </div>
  );
};
