import "./Card.css";
import { useState } from "react";

const Card = (props) => {
  const [modale, setModale] = useState(false);
  console.log(modale);

  return (
    <div
      className="cards"
      onClick={() => {
        !modale ? setModale(true) : setModale(false);
      }}
    >
      <div className="card-container">
        <img className="card-image" src={props.img} alt="" />
        <div className="card-description">
          <span>{props.name}</span>
          <span>{props.house}</span>
        </div>
      </div>
      {!modale ? null : (
        <div className="card-container-modale">
          <img className="card-image" src={props.img} alt="" />
          <div className="card-description">
            <span>{props.name}</span>
            <span>{props.house}</span>
            <span>{props.secondName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
