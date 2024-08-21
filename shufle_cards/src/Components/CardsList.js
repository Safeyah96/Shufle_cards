import React, { useState } from "react";
import Card from "./Card";
import cardData from "../cardData";

function CardsList() {
  const [selectedCards, setSelectedCards] = useState([]);
  function addSelected(card) {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, card]);
    } else {
      const firstCard = selectedCards.shift();
      setSelectedCards([firstCard, card]);
    }
  }

  const displayedCards = cardData.map((data) => {
    return <Card addSelected={addSelected} card={data} />;
  });
  return <div className="card-list">{displayedCards}</div>;
}

export default CardsList;
