import React from "react";
import styled from "./Card.module.css";
const Card = ({ src, exp, name, designation }) => {
  return (
    <div className={styled.card}>
      <img src={src} alt="" className={styled.image} />

      <h2 className={styled.name}>{name}</h2>
      <h5 className={styled.des}>{designation}</h5>
      <h3 className={styled.exp}>{exp}</h3>
    </div>
  );
};
export default Card;
