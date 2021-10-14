import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage6 from "../../assets/images/products/komposittrall/marinecap.webp";
import proImage7 from "../../assets/images/products/komposittrall/marine40.webp";
import proImage8 from "../../assets/images/products/komposittrall/marine60.webp";
import proImage9 from "../../assets/images/products/komposittrall/marinejumbo.webp";
import proImage10 from "../../assets/images/products/komposittrall/marineart.webp";






const DATA = [
   
      {
        link: "/marine-cap-komposittrall",
        image: proImage6,
        title: "Green Plank MARINE CAP ™ terrassebrædder",
        text:
          "MARINE CAP ™ indkapslet kompositvogn er over konkurrencen...."
      },
      {
        link: "/marine-40-komposittrall",
        image: proImage7,
        title: "Green Plank MARINE 40 ™ terrassebrædder",
        text:
          "MARINE 40 ™ kompositvogn gør skønhed praktisk - PVC -fri......"
      },
      {
        link: "/marine-60-komposittrall",
        image: proImage8,
        title: "Green Plank MARINE 60 ™ terrassebrædder",
        text:
          "Inspireret af naturen og designet til fund af friluftsliv........"
      },
      {
        link: "/marine-jumbo-komposittrall",
        image: proImage9,
        title: "Green Plank MARINE JUMBO ™ kraftig terrassebrædder",
        text:
          "Green Plank MARINE JUMBO ™ er inspireret af naturens styrke........"
      },
        {
          link: "/marine-art-komposittrall",
          image: proImage10,
          title: "Green Plank MARINE ART ™ terrassebrædder",
          text:
            "MARINE ART natur naturlig fiber kompositvogn tilbyder et 3D -look........"
        }
];

const marineKomposittrallSection = () => {
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

export default marineKomposittrallSection;
