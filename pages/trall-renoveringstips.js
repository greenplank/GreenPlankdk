import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-renoverings-tips.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallrenoveringstips = () => {
  return (
    <Layout pageTitle="tip til vognrenovering">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="tip til vognrenovering" crumbTitle="tip til vognrenovering" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div>
                <div className="row">
                  <div className="blog-details col-12">
                    <div className="blog-inner">
                      <div className="media"><div className="image"><img src={blogImg} alt="" /></div></div>
                      <div className="content">
                        <h2 className="title">Tips til dækrenovering</h2>
                        <div className="mb-30">
                          <p>Når dit almindelige trædæk revner, ruller og ganske enkelt bliver løst, er det tid til at genopbygge dit trolley -dæk. Olie og maling er en populær metode til renovering af trædæk, men hvorfor blive der? Udskift dit normale trædæk med vejrbestandige, miljøvenlige og vedligeholdelsesfrie Green Plank®-dæk i stedet. Det kan bare være nødvendigt at fjerne dit gamle trædæk og udskifte det med Green Plank® lavt vedligeholdte kompositvognvogne.
                          </p>
                          <p>Når du renoverer dit dæk, er det måske det vigtigste at vide; arbejder du med det du har?
                          </p>
                          <h3 className="mb-30 mt-30">Gør du det selv eller bruger du en iværksætter?
                          </h3>
                          <p className="mb-30 mt-30">Er du praktisk med hammeren, og overvejer du at installere dit eget dæk? Gør-det-selv dækbygning kan være en givende og udfordrende oplevelse. Men det kan også eskalere hurtigt og blive dit værste mareridt. Selvom du har tidligere erfaring med at bygge dæk, er der flere grunde til, at dette job er til profferne. Stil dig selv disse spørgsmål: dig selv:
                          </p>
                          <h4 className="mb-30 mt-30">Har du tid?
                          </h4>
                          <p className="mb-30 mt-30">En stor indflydelse er bare tiden. Det kan ødelægge din drøm om at bygge et smukt vogndæk, især hvis du arbejder 7 til 16 og kun kan arbejde på din drøm i weekenderne. Nogle gange er det svært at finde tiden selv i weekenden. En entreprenør eller bygherre får ikke kun arbejdet udført hurtigt, men du ved præcis, hvornår dit dæk er klar, da de fungerer efter en tidsplan.
                          </p>
                          <h4 className="mb-30 mt-30">Har du værktøjerne?
                          </h4>
                          <p className="mb-30 mt-30">Bare fordi du har en hammer og en sav, betyder det ikke, at du er tømrer. Sømpistoler, skruetrækkere, trillebøre, gravemaskiner til stolperne og alt grundlæggende værktøj, de er et must have, når man bygger dæk. Hvis du planlægger at købe værktøjer til at bygge dit dæk, er det bedre, at du i stedet ansætter en professionel, der allerede har disse værktøjer til at få arbejdet udført.
                          </p>
                          <h4 className="mb-30 mt-30">Har du forsikringen?
                          </h4>
                          <p className="mb-30 mt-30">En professionel tømrer har den forsikring, de har brug for, hvis der skulle opstå et problem. Hvis materialer bliver beskadiget eller stjålet under byggeriet, er bygherrens risikoforsikring den eneste måde at kompensere for tabene. Hvis nogen skulle blive skadet under byggeriet (tømreren, dig eller en i din familie), har arbejderne desuden erstatning til dækning af skaden og / eller ulykken. Dette frigør dig fra alle økonomiske forpligtelser.
                          </p>
                          <h3 className="mb-30 mt-30">Materiale</h3>
                          <p className="mb-30 mt-30">Den vanskeligste beslutning at tage, når man bygger et dæk, er hvilket materiale der skal bruges. De adskiller sig meget mellem de forskellige, der er et stort udvalg at vælge imellem, og også priser og kvalitet er forskellige. Hvis du vil have miljøvenligt og familievenligt, dvs. at der ikke er nogen fare for børnene at løbe rundt - så er Green Plank® det rigtige valg!
                          </p>
                          <h3 className="mb-30 mt-30">Tralldäcks tjekliste:
                          </h3>

                          <strong>1. </strong>Brug skjulte fastgørelsessystemer i stedet for skruer, hvor "hovedet" er synligt, og du kan komme til skade
                          <br />
                          <strong>2. </strong>Alle skruer, bolte og søm skal være af rustfrit stål eller galvaniseret
                          <br />
                          <strong>3. </strong>Sørg for, at dit dæk er stærkt nok til at holde til dine besøg, regne med at hver voksen vejer 70-100 kg.
                          <br />
                          <strong>4. </strong>Sørg for, at dit gelænder er fremstillet i henhold til den aktuelle konstruktionsstandard
                          <br />
                          <strong>5. </strong>Efterlad et hul på 3 mm - 5 mm mellem terrasserne
                          <br />
                          <strong>6. </strong>Efterlad 3-5 mm afstand mellem dækbrædderne.
                          <br />

                          <p className="mb-30 mt-30"><strong>Tips:</strong>Pilotbor hvert skruehul, da gamle bjælker er tørre og hårde. Hvis du ikke bruger et pilothul, kan dækskruer glides af i det hærdet træ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 section-space--top--60">
                    {/* <BlogComment/> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default trallrenoveringstips;
