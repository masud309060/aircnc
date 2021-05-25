import React from "react";
import { Link } from "react-router-dom";
import "./Experiences.css";

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience_item">
      <Link to="/">
        <img src={experience.image} alt="" />
        <strong>
          {experience.category}. {experience.place}
        </strong>
      </Link>
      <h6>{experience.title}</h6>
      <span>${experience.pricePerPerson} per person</span>
      <span>
        {Array(Math.ceil(experience.avgRating))
          .fill()
          .map((_, i) => (
            <i
              key={i}
              style={{ color: "#079992", marginRight: "1px" }}
              className="fas fa-star "
            >
              {" "}
            </i>
          ))}{" "}
        {experience.totalRating}
      </span>
    </div>
  );
};

export default ExperienceItem;
