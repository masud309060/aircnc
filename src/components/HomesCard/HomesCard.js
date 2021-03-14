import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import './HomesCard.css';

const HomesCard = ({homes}) => {
    const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 100
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
    <div className="homes_card_main">
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
          homes.map(homeData => 
            <div className="homes_card" key={homeData._id}>
              <Link to="/">
                <img src={homeData.image} alt=""/>
                <strong>{homeData.category}. {homeData.place}</strong>
              </Link>
              <h6>{homeData.title}</h6>
              <span>${homeData.price} per person</span>
              <span> 
                {Array(Math.ceil(homeData.avgRating))
                    .fill()
                    .map((_, i) => (
                        <i key={i} style={{color: "#079992",marginRight:"1px"}} class="fas fa-star "> </i>
                    ))} {" "} 
                {homeData.totalRating}
              </span>
            </div>
            )
        }
      </Carousel>
    </div>
  );
};

export default HomesCard;