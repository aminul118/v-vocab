import { useState, useEffect } from "react";

const BannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [
    {
      image:
        "https://i.ibb.co/k69929R/portrait-smiling-hr-manager-having-interview-with-candidate.jpg",
      text: "Career Counseling Sessions",
    },
    {
      image:
        "https://i.ibb.co/MVDPMRJ/sebastian-herrmann-n4-Q2d-DYy80-unsplash.jpg",
      text: "Resume Review",
    },
    {
      image: "https://i.ibb.co/brg4qpH/Time-Management-Workshop.webp",
      text: "Time Management Workshop",
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1));
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            activeSlide === index + 1 ? "block" : "hidden"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[500px] lg:h-[calc(100vh-296px)] object-cover "
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white flex justify-center text-center items-center text-4xl font-bold bg-black w-full  h-full bg-opacity-50 px-4 py-2 ">
              {slide.text}
            </h2>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
