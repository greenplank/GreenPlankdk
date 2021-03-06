import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";


import proImage12 from "../../assets/images/products/komposittrall/classic.webp";





const DATA = [
    
      {
        link: "/classic-teak-komposittrall",
        image: proImage12,
        title: "Green Plank CLASSIC ™ terrassebrædder",
        text:
          "Inspireret af den skandinaviske designtradition som.............."
      }
];

const classicKomposittrallSection = () => {
  return (
    <section className="news-page pt-120 pb-120">
      {/* <Container>
        <Row className="align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={12}>
            <BlockTitle
              title={`Populära artiklar inom GreenPlank & hållbart bygghandel`}
              tagLine="Blogginlägg"
            />
          </Col>
        </Row>
      </Container> */}
      <Container>
        <div className="news-3-col">
          {DATA.map(
            (
              { image, title, text, link},
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                text={text}
                link={link}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default classicKomposittrallSection;
