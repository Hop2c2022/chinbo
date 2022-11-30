import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [info, setInfo] = useState("");
  useEffect(() => {
    const dataAvagc = async () => {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/" +
          "https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/46.8625,103.8467"
      );
      setInfo(result.data);
    };
    dataAvagc();
  }, []);
  console.log(info);
  return (
    <div>
      {info.currently.summary}
      {info.currently.temperature}
      {info.currently.time}
      {info.timezone}
    </div>
  );
};
export default App;
