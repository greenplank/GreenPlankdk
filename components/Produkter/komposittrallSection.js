import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/komposittrall/smartclassic.webp";
import proImage2 from "../../assets/images/products/komposittrall/smartregular.webp";
import proImage3 from "../../assets/images/products/komposittrall/smartmarine.webp";
import proImage4 from "../../assets/images/products/komposittrall/smartcap.webp";
import proImage5 from "../../assets/images/products/komposittrall/ultrasmart.webp";
import proImage6 from "../../assets/images/products/komposittrall/marinecap.webp";
import proImage7 from "../../assets/images/products/komposittrall/marine40.webp";
import proImage8 from "../../assets/images/products/komposittrall/marine60.webp";
import proImage9 from "../../assets/images/products/komposittrall/marinejumbo.webp";
import proImage10 from "../../assets/images/products/komposittrall/marineart.webp";
import proImage11 from "../../assets/images/products/komposittrall/entra.png";
import proImage12 from "../../assets/images/products/komposittrall/classic.webp";
import proImage13 from "../../assets/images/products/komposittrall/everdeck.webp";
import proImage14 from "../../assets/images/products/komposittrall/sapphires.webp";
import proImage15 from "../../assets/images/products/komposittrall/komposittillbehör.webp";





const DATA = [
    {
        link: "/smart-komposittrall-smart-classic",
        image: proImage1,
        title: " SMART ™ Terrassebrædder System - Smart Classic ™",
        text:
          "SMART ™ (kompositvogn) kompositvogn er et glimrende valg til ....."
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
        title: "Ultra™ SMART Komposittrall",
        text:
          "Med vores nye Smart Ultra får du en terrasse, der er 50% lettere........"
      },
      {
        link: "/marine-cap-komposittrall",
        image: proImage6,
        title: "MARINE CAP ™ terrassebrædder",
        text:
          "MARINE CAP ™ indkapslet kompositvogn er over konkurrencen...."
      },
      {
        link: "/marine-40-komposittrall",
        image: proImage7,
        title: "MARINE 40 ™ terrassebrædder",
        text:
          "MARINE 40 ™ kompositvogn gør skønhed praktisk - PVC -fri......"
      },
      {
        link: "/marine-60-komposittrall",
        image: proImage8,
        title: "MARINE 60 ™ terrassebrædder",
        text:
          "Inspireret af naturen og designet til fund af friluftsliv........"
      },
      {
        link: "/marine-jumbo-komposittrall",
        image: proImage9,
        title: "MARINE JUMBO ™ kraftig terrassebrædder",
        text:
          "Green Plank MARINE JUMBO ™ er inspireret af naturens styrke........"
      },
        {
          link: "/marine-art-komposittrall",
          image: proImage10,
          title: "MARINE ART ™ terrassebrædder",
          text:
            "MARINE ART natur naturlig fiber kompositvogn tilbyder et 3D -look........"
        },
      {
        link: "/entra-komposittrall",
        image: proImage11,
        title: "ENTRA™ terrassebrædder",
        text:
          "Inspireret af naturen og designet med en formålsfarve............"
      },
      {
        link: "/classic-teak-komposittrall",
        image: proImage12,
        title: "CLASSIC ™ terrassebrædder",
        text:
          "Inspireret af den skandinaviske designtradition som.............."
      },
      {
        link: "/everdeck-komposittrall",
        image:proImage13,
        title: "EVERDECK™ terrassebrædder",
        text:
          "Inspireret af den skandinaviske designtradition som..............."
      },
      {
        link: "/sapphire-komposittrall",
        image: proImage14,
        title: "SAPPHIRE ™ terrassebrædder",
        text:
          "Inspireret af det traditionelle trædæk, der er karakteriseret.........."
      },
      {
        link: "/tillbehor-till-komposittrall",
        image: proImage15,
        title: "Komposit Terrassebrædder Tilbehør",
        text:
          "prikken over i’et med design og sikkerhed, der gør din vogn.............."
      }
];

const komposittrallSection = () => {
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

export default komposittrallSection;
