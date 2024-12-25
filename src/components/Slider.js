import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      header: 'Affordable Course Packages',
      text: 'Learn without breaking the bank! Explore our diverse course packages designed to fit all budgets. Quality education at an affordable price for everyone.',
      img: './assets/slider-img-1.png',
    },
    {
      header: 'Flexible Scheduling',
      text: 'Your schedule, your choice! Book a demo session and select a trainer who fits your needs. Classes are available at times that work best for you.',
      img: './assets/slider-img-2.png',
    },
    {
      header: 'Finally free from old-school banks',
      text: "We're here for you every step of the way. Whether it's for consultations, questions, or refunds, contact us anytime for quick and helpful support.",
      img: './assets/slider-img-3.png',
    },
  ];

  const maxSlide = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === maxSlide - 1 ? 0 : prevSlide + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [maxSlide]);

  const goToSlide = (slide) => {
    setCurrentSlide(slide);
  };

  return (
    <div className="section__title--slide" aria-label="Image Sliders">
      <div className="parent-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`child-slide ${currentSlide === index ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <div className="slide-content">
              <h5 className="slide__header">{slide.header}</h5>
              <blockquote className="slide__text">{slide.text}</blockquote>
            </div>
            <img className="slider-img" src={slide.img} alt={slide.header} />
          </div>
        ))}
      </div>
      <div className="dots" aria-label="Slider Header Dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dots__dot ${currentSlide === index ? 'dots__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
     
    </div>
  );
};

export default Slider;
