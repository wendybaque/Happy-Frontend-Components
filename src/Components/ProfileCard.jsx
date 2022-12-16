import React from "react";
import "./profilecard.css";

const ProfileCard = () => {
  return (
    <div className="profile-body">
      <div className="profile-card">
        <div className="img-box">
          <img
            src="https://wendybaquedevweb.netlify.app/static/media/photocv.a23453e64da25bedaaf3.png"
            alt="Wendy Baqué"
          />
        </div>
        <div className="profile-content">
          <div className="profile-details">
            <h2>
              Wendy Baqué <br />
              <span>Web developper</span>
            </h2>
            <ul className="profile-sci">
              <li>
                <a
                  href="https://www.facebook.com/AntiigoneWB"
                  alt="profil Facebook de Wendy Baqué"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
                  alt="profil LinkedIn de Wendy Baqué"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wendybqe/"
                  alt="profil Instagram de Wendy Baqué"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
