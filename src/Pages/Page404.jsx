import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./page404.css";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <>
      <div className="error-body">
        <div className="error-wrap">
          <div className="html"></div>
          <div className="play">SORRY</div>
          <div className="with">ERROR</div>
          <div className="code">404</div>
        </div>
      </div>
      <p className="error-p">Automatic redirection to homepage</p>
    </>
  );
};

export default Page404;
