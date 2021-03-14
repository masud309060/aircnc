import React from 'react';
import ExperienceItem from './ExperienceItem';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Experiences = (props) => {
  const experiences = props.experiences
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  };
  
  return (
    <div className="experiences">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
      {
        experiences.map(experience => 
          <ExperienceItem experience={experience} key={experience._id}/>
          )
        }
      </Carousel>
    </div>
  );
};

export default Experiences;