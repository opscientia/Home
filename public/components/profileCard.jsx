import React from "react";
import st from "./../../styles/components/profileCard.module.css";

const ProfileCard = (props) => {
  return (
    <div className={st.ProfileCard}>
      <div className={st.header}>
        <img src={props.img} alt="" />
        <main>
          <h5>{props.name}</h5>
          <h6>{props.position}</h6>
        </main>
      </div>
      <p>
        {props.description}
      </p>
    </div>
  );
};

export default ProfileCard;
