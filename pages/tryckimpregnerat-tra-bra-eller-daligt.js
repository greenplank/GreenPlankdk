import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Tryckimpregnerat-trä.webp";
import Footer from "../components/footer";
import Head from "next/head";

const tryckimpregnerat = () => {
  return (
    <Layout pageTitle="trykimprægneret-tra-godt-eller-dårligt
    ">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="trykimprægneret-tra-godt-eller-dårligt" crumbTitle="trykimprægneret-tra-godt-eller-dårligt" />
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
                        <h2 className="title">Trykimprægneret træ - godt eller dårligt?</h2>
                        <div className="mb-30">
                          <p>Trykimprægneret træ er for det meste fyrretræ. Træet har en holdbarhed på mellem 20-25 år udendørs, hvis det bruges korrekt.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hvor bruges trykimprægneret træ?
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Trykimprægneret træ er perfekt til de steder, hvor en struktur er i mere eller mindre konstant kontakt med jord eller vand. Alternativt kan du vælge en eg eller andre træsorter, der holder længe, ​​hvilket er betydeligt dyrere end billigt trykimprægneret træ.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Trykimprægneret træ er også velegnet til brug på byggepladser, hvor det kan være svært at få adgang til og se træets tilstand. Når man bygger med trykimprægneret træ, kan det være godt at bruge skruer mærket med A4, rust og syrefast. Det skyldes, at kobberforbindelserne i trykimprægneret træ let kan røre ved almindelige skruer.
                          </p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Hvor man ikke skal bruge trykimprægneret træ
                            ?
                          </h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Hvis du skal bygge høje senge, er det en frygtelig idé at bruge trykimprægneret træ. Uanset træmærket bør trykimprægneret træ ikke komme i kontakt med mad eller mad, så det er ikke acceptabelt at bruge det i høje senge, hvor kemiske stoffer kan trænge ned i jorden.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Du bør heller ikke bruge trykimprægneret træ på legepladser eller legehuse, hvor børn kan kontakte træet. Hvis du gør dette, skal du først male træet.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Det er heller ikke tilladt at brænde trykimprægneret træ, så hvis du ikke længere skal bruge træet, anbefaler vi, at du efterlader det på genbrugsstationen.
                          </p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Pas på at tage Arbejde med trykimprægneret træ
                          </h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Hvis du skal arbejde med træet i lang tid, kan det være en god idé at bruge handsker, ligesom det er en god idé at bruge en maske, hvis du skal se eller slibe meget trykimprægneret træ . Trykimprægneret træ fremstillet i udlandet kan indeholde chromforbindelser, der kan forårsage hudirritation eller allergiske reaktioner ved langvarig kontakt.
                          </p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Alternativ til trykimprægneret træ
                          </h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Der er mange alternativer til trykimprægneret træ. Det eneste problem er, at de normalt er ret dyre. Skovens azobé, Robinia og teak kan bruges til, at stænger kan stå på jorden. Holdbarheden er længere end for egetræ og måler godt med trykimprægneret træ. Azobé er så robust, at den bruges under saltvand, f.eks. lystbådehavne og havmiljøer.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Til træterrasser og lignende, hvor træet skal monteres vandret, kan flere tropiske træsorter som doussié, billing og teak bruges som et alternativ trykimprægneret træ. Og til træfacader kan fyr, gran og lærk bruges. Hvis de er overfladebehandlet efter alle tekniske regler, inden de samles, opnår de en holdbarhed, der kan måles med trykimprægneret træ.
                          </p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Maling af trykimprægneret træ
                          </h4>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Da trykimprægneret træ indeholder imprægneringsvæske, kan det være lidt af en udfordring at male. Som udgangspunkt bør du få beskyttelse mod jerntræ på dit trykimprægnerede træ. Når trykimprægneret træ udsættes for solens skarpe UV-stråler, nedbrydes træets overflade.
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

export default tryckimpregnerat;
