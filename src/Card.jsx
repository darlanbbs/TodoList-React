import "./Card.css";
import { useState } from "react";

export const Card = ({ nick, removeTask }) => {
  const [className, setClassName] = useState("");

  const handleClick = () => {
    if (className === "") {
      setClassName("completed");
    } else {
      setClassName("");
    }
  };
  return (
    <div className="allCards">
      <div className="containerCard">
        <ul className="checkbox-wrapper-57">
          <label class="container">
            <input type="checkbox" onClick={handleClick} />
            <div className="checkmark"></div>
            <p className={`${className}`}>{nick}</p>
          </label>
          <img src="/deleteImage.png" onClick={(e) => removeTask(e)}></img>
        </ul>
      </div>
    </div>
  );
};
