import React from "react";
import { useState } from "react";
function Card({ card, addSelected }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn(!on);
  }
  return (
    <button onClick={toggleaddSelected} className={`card ${on ? "green" : ""}`}>
      <img width={100} src={card.img} alt={card.name} />
    </button>
  );
}

export default Card;
