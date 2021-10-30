import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling, setLanguage }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang)
  }
  
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>
        Vladyslav Kapkan
      </div>
      <div className="languages">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png" alt="english" onClick={() => handleChangeLanguage('en')}/>
        <img src="https://cdn.countryflags.com/thumbs/spain/flag-button-round-250.png" alt="spanish" onClick={() => handleChangeLanguage('es')}/>
      </div>
    </nav>
  );
};

export default Navbar;
