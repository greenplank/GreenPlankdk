import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/komposittrall/smartclassic.webp";
import proImage2 from "../../assets/images/products/komposittrall/smartregular.webp";
import proImage3 from "../../assets/images/products/komposittrall/smartmarine.webp";
import proImage4 from "../../assets/images/products/komposittrall/smartcap.webp";
import proImage5 from "../../assets/images/products/komposittrall/ultrasmart.webp";



const DATA = [
    {
        link: "/smart-komposittrall-smart-classic",
        image: proImage1,
        title: "SMART ™ terrassebrædder system - Smart Classic ™",
        text:
          "SMART ™ (kompositvogn) kompositvogn er et glimrende valg til....."
      },
      {
        link: "/smart-komposittrall-smart-regular",
        image: proImage2,
        title: "SMART ™ Terrassebrædder System - Smart Regular ™",
        text:
          "SMART ™ Composite pyntede gulve er et glimrende valg for familier...."
      },
      {
        link: "/smart-komposittrall-smart-marine",
        image: proImage3,
        title: "SMART ™ Terrassebrædder System - Smart Marine ™",
        text:
          "SMART ™ Composite -terrassedæk er et glimrende valg for familier.........."
      },
      {
        link: "/smart-komposittrall-smart-cap",
        image: proImage4,
        title: "SMART CAP ™ terrassebrædder system",
        text:
          "SMART CAP ™ er dækket af en beskyttende polymerskal og er vores......"
      },
      {
        link: "/ultra-smart",
        image: proImage5,
        title: "Ultra™ SMART terrassebrædder",
        text:
          "Med vores nye Smart Ultra får du en terrasse, der er 50% lettere........"
      }
      
];

const smartKomposittrallSection = () => {
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

export default smartKomposittrallSection;
