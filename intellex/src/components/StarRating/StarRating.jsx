import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FullStar = () => <FontAwesomeIcon icon={faStar} />;

const HalfStar = () => <FontAwesomeIcon icon={faStarHalfStroke} />;

// Rating component that takes a single number as a parameter
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);

  const halfStar = rating % 1 >= 0.5 ? 1 : 0;

  const totalStars = 5;

  const fullStarIcons = Array(fullStars).fill(<FullStar />);

  const emptyStarCount = totalStars - fullStars - halfStar;
  const halfStarIcons = halfStar === 1 ? [<HalfStar key="half" />] : [];
  const emptyStars = Array(emptyStarCount).fill(<span key="empty">☆</span>);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {fullStarIcons}
      {halfStarIcons}
      {emptyStars}
    </div>
  );
};

export default StarRating;
