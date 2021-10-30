import React from "react";
import "./Slider.css";
import gamePicture from '../../media/kvalifik-Qp0sNSZhFx4-unsplash.jpg'
import eventator from '../../media/jade-masri-74tlEYKgrBE-unsplash.jpg'
import englissue from '../../media/sigmund-C713D7KSkaY-unsplash.jpg'

const slidesInfo = [
  {
    src: gamePicture,
    alt: "Project 1",
    desc: "Square Invaders",
  },
  {
    src: eventator,
    alt: "Project 2",
    desc: "Eventator",
  },
  {
    src: englissue,
    alt: "Project 3",
    desc: "Englissue",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
