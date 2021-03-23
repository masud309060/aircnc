import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Apartment.css";
import SecondaryHeader from "../Header/SecondaryHeader";
import { Col, Container, Row } from "react-bootstrap";
import ReserveForm from "../ReserveForm/ReserveForm";
import { connect } from "react-redux";

const Apartment = ({ hotels, userData }) => {
  const [match, setMatch] = useState(null);
  const { hotel_id } = useParams();

  useEffect(() => {
    const apartments = hotels.hotels.slice();
    const matchApartment = apartments.filter((item) => item._id === hotel_id);
    setMatch(matchApartment[0]);
  }, [hotel_id]);
  console.log(hotels);

  const featureList = [
    {
      id: 1,
      name: "Entire Home",
      image: "/images/home.png",
      description: "You'll have the condominium to yourself.",
    },
    {
      id: 2,
      name: "Self check-in",
      image: "/images/checkmark-square-2.png",
      description: "You can check in with the doorman.",
    },
    {
      id: 3,
      name: "Sparkling clean",
      image: "/images/solid.png",
      description: "10 recent guests said this place was sparkling clean.",
    },
    {
      id: 4,
      name: "Rowdra is a Superhost ",
      image: "/images/single-01.png",
      description:
        "Superhosts are experienced, highly rated hosts who <br/> are committed to providing great stays for guests.",
    },
  ];

  return (
    <div className="apartment">
      <p>dihan abir</p>
      <Container>
        <SecondaryHeader />
      </Container>
      {match ? (
        <>
          <div className="apartment_header_img mb-3">
            <img
              src="/images/photo-1560347876-aeef00ee58a1.jpeg"
              alt="demo aparment images"
            />
            <img src={match.image} alt={match.title} />
          </div>
          <Container>
            <Row>
              <Col md={6} className="pl-md-5">
                <div className="apartment_header">
                  <h4>{match.title}</h4>
                  <div className="d-flex flex-column align-items-center">
                    {userData?.user.photoURL ? (
                      <img
                        src={userData.user.photoURL}
                        alt={userData.user.name}
                      />
                    ) : (
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/hipster-beard-man-white-512.png"
                        alt="user profile"
                      />
                    )}
                    <span style={{ marginBottom: "-2rem" }}>
                      {userData?.user.displayName}
                    </span>
                  </div>
                </div>
                <div className="apartment_search_info">
                  <strong>Dhaka, Bangladesh</strong> <br />
                  <span>{`${match.guest} guests ${match.bedroom} bedrooms ${match.bed} beds ${match.bath} baths`}</span>
                </div>
                <div className="apartment_feature_list">
                  {featureList.map((item) => (
                    <div>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="apartment_feature_more">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam asperiores repellendus quibusdam provident culpa
                    eum aspernatur assumenda, quas porro quaerat ratione harum
                    quasi minima labore est enim nihil, earum corrupti molestias
                    tempora praesentium ullam illum? Nostrum quia ipsum odio
                    quae cum ut,
                  </p>
                  <p>
                    Deserunt minima facere aspernatur, architecto neque vel
                    cumque quis praesentium voluptates expedita tenetur modi
                    dolorum nemo inventore id. Odio adipisci quo suscipit
                    cupiditate ratione recusandae. Corrupti ducimus.
                  </p>
                  <p>
                    assumenda temporibus facilis. Blanditiis provident minima
                    aliquam culpa consectetur. Repellat soluta consectetur enim
                    accusamus sed dolor in corporis id earum voluptas modi magni
                    fugit non, debitis officia alias perferendis vel.
                  </p>
                  <strong>
                    <span>Read more about the space </span>
                    <i class="fas fa-chevron-down"></i>
                  </strong>
                </div>
                <div className="apartment_reviews">
                  <h5>Reviews </h5>
                  <span>
                    <i
                      class="fas fa-star"
                      style={{ color: "#079992", marginRight: ".25rem" }}
                    ></i>
                    {match.avgRating} ({match.totalRating} reviews)
                  </span>
                </div>
              </Col>
              <Col md={6}>
                <ReserveForm match={match} searchItem={hotels.searchItem} />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        " "
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    userData: state.authentication,
  };
};

export default connect(mapStateToProps)(Apartment);
