import { useState, useEffect } from "react";
import "./Carousel.css";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const images = [
  { src: banner1, link: "https://suap.uepb.edu.br/" },
  {
    src: banner2,
    link: "https://departamentos.uepb.edu.br/comp-ccea/apresentacao-do-curso/",
  },
  { src: banner3, link: "" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="carousel">
      {currentImage.link ? (
        <a href={currentImage.link} target="_blank" rel="noopener noreferrer">
          <img src={currentImage.src} alt={`Banner ${currentIndex + 1}`} />
        </a>
      ) : (
        <img src={currentImage.src} alt={`Banner ${currentIndex + 1}`} />
      )}

      <button className="carousel-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
