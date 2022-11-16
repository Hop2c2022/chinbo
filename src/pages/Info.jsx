import axios from "axios";
import { useEffect, useState } from "react";

export const Info = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const dataAvagc = async () => {
      const result = await axios.get("https://dummyapi.io/data/v1/user/", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "63104c3120f6e665ecf628ba",
        },
      });
      setUser(result.data);
    };
    dataAvagc();
  }, []);
  console.log(user.data);
  return (
    <div>
      {user?.data?.map((el) => {
        return (
          <div className="w-25">
            <img src={el.picture} alt="" />
            <div>First name: {el.firstName} </div>
            <div>Last name: {el.lastName} </div>
            <div> id: {el.id}</div>
            <div> title: {el.title}</div>
          </div>
        );
      })}
    </div>
  );
};
