import React from "react";
import FlexIcon from "../images/flex_icon.png";
import NutritionIcon from "../images/nutrition_icon.png";
import ClipBoardIcon from "../images/clipboard_icon.png";

export default function HomeCard() {
  return (
    <div className="home-card">
      <div className="home-card-icon-container">
        <img
          className="home-card-icon"
          src={FlexIcon}
          alt="Icon of a man flexing his muscles"
          srcSet=""
        />
        <h3 className="home-card-icon-text">Fitness</h3>
      </div>
      <div className="home-card-icon-container">
        <img
          className="home-card-icon"
          src={NutritionIcon}
          alt="Icon of a plate of healthy food"
          srcSet=""
        />
        <h3 className="home-card-icon-text">Nutrition</h3>
      </div>
      <div className="home-card-icon-container">
        <img
          className="home-card-icon"
          src={ClipBoardIcon}
          alt="Icon of a clipboard with a checklist"
          srcSet=""
        />
        <h3 className="home-card-icon-text">Plans</h3>
      </div>
    </div>
  );
}
