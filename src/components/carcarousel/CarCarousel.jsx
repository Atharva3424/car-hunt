import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CarCarousel = () => {
  const images = [
    "/public/assets/Logo.jpg",
    "/images/car2.jpg",
    "/images/car3.jpg",
    "/images/car4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container position-relative text-center mt-4">
      <div className="rounded shadow-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Car ${currentIndex + 1}`}
          className="img-fluid rounded"
        />
      </div>
      <button
        onClick={prevSlide}
        className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
      >
      </button>
      <button
        onClick={nextSlide}
        className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
      >
      </button>
      <div className="d-flex justify-content-center mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 rounded-circle d-inline-block cursor-pointer ${
              currentIndex === index ? "bg-dark" : "bg-secondary"
            }`}
            style={{ width: "10px", height: "10px" }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarCarousel;