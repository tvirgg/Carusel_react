import React, { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectSlider.css';

const projects = [
  { category: 'ЖК Патриция', name: 'Проект 1', year: 2023, image: 'https://img.freepik.com/free-photo/beautiful-scenery-canyon-landscape-grand-canyon-national-park-arizona-usa_181624-42018.jpg', price: '200 000 ₽' },
  { category: 'Каньон США', name: 'Проект 2', year: 2024, image: 'https://img.freepik.com/premium-photo/scenic-canyon-sweden-ar-32_1149116-482.jpg', price: '300 000 ₽' },
  { category: 'Каньон Швеция', name: 'Проект 3', year: 2024, image: 'https://img.freepik.com/premium-photo/canyon-river-beautiful-landscape-ai-generated_406939-8932.jpg', price: '400 000 ₽' },
  { category: 'Каньон Река', name: 'Проект 4', year: 2024, image: 'https://buro314.ru/wp-content/uploads/2024/03/02_%D0%BF%D1%83%D1%82240325-%D1%81%D1%88%D0%B02.jpg', price: '500 000 ₽' },
  { category: 'ЖК Патриция', name: 'Проект 1', year: 2023, image: 'https://img.freepik.com/free-photo/beautiful-scenery-canyon-landscape-grand-canyon-national-park-arizona-usa_181624-42018.jpg', price: '200 000 ₽' },
  { category: 'Каньон США', name: 'Проект 2', year: 2024, image: 'https://img.freepik.com/premium-photo/scenic-canyon-sweden-ar-32_1149116-482.jpg', price: '300 000 ₽' },
  { category: 'Каньон Швеция', name: 'Проект 3', year: 2024, image: 'https://img.freepik.com/premium-photo/canyon-river-beautiful-landscape-ai-generated_406939-8932.jpg', price: '400 000 ₽' },
  { category: 'Каньон Река', name: 'Проект 4', year: 2024, image: 'https://buro314.ru/wp-content/uploads/2024/03/02_%D0%BF%D1%83%D1%82240325-%D1%81%D1%88%D0%B02.jpg', price: '500 000 ₽' },
];

const ProjectSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`slide ${activeIndex === index ? 'active' : ''}`}
              animate={{
                width: activeIndex === index ? '200px' : 'calc((100% - 50px) / 6)',
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="slide-image"
                animate={{
                  filter: activeIndex === index ? 'blur(0px)' : 'blur(1px)',
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="slide-info">
                <h4>{project.category}</h4>
                <p>{project.price}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
        <div className="buttons">
          <button className="prev" onClick={() => sliderRef.current.slickPrev()}>
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <button className="next" onClick={() => sliderRef.current.slickNext()}>
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

export default ProjectSlider;
