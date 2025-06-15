import { useState, useEffect } from "react";
import "./Carousel.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const images = [banner1, banner2, banner3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="Banner rotativo" />
    </div>
  );
}
