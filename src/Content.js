import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const [name, setName] = useState("Bobbo");

  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const handleNameChange = () => {
    const names = ["Gustav", "Bobbo", "Linkan"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p className="text" onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
      <button onClick={() => navigate("/test")}>Navigera</button>
    </main>
  );
};

export default Content;
