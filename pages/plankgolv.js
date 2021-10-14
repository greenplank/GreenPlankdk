import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Plank.webp";
import Footer from "../components/footer";
import Head from "next/head";

const plankgolv = () => {
  return (
    <Layout pageTitle="plankegulv">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="plankegulv" crumbTitle="plankegulv" />
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
                        <h2 className="title">Planke gulv</h2>
                        <div className="desc section-space--bottom--30">
                          <p>Et plankegulv, også kendt som et båndgulv eller et bæltegulv, er et trægulv af brædder, i rumlængder eller varierende længder. Det er den ældste form for trægulve sammen med trægulvet (klikgulv) lavet af korte sektioner af trækorn.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Planker kan laves af alle træsorter, der kan skæres til den ønskede bredde uden at revne. Tørt og formstabilt træ er ønskeligt for at opnå en langvarig overflade, der er fri for forskydning og samlinger.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Traditionelt bruges massive brædder med en tykkelse på cirka 21 til 40 mm og en bredde på 100 mm eller mere. I dag er gulvbrædder normalt forsynet med tunge og riller, som fordeler punktbelastninger på flere tilstødende gulvbrædder, så selv tyndere brædder med en tykkelse på cirka 15 mm kan bruges med tilstrækkelig understøtning. Højdeforskelle på grund af forvrængning af træet kan heller ikke forekomme.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>I dag limes planker også i to eller flere lag såsom finer eller limet lamineret træ og kaldes ofte landbrugsplanker eller parketplanker.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Fyr, lærk, gran eller gran bruges mest som nåletræ. Omkring 1900 blev den importerede skovkvalitet og Oregon -fyr (Douglasgran) oftere brugt i gamle bygninger. Højkvalitetsgulve er lavet af hårdttræ eller tropiske træsorter.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Pleje og rengøring af trægulve:
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}><strong>Sådan rengøres og vedligeholdes plankerne afhænger af gulvet og dets overflade:
                          </strong></p>

                          <strong>1. </strong><strong>Naturligt:</strong> Pladerne er åbne og kræver meget pleje, de må ikke tørres våde. For at øge overfladens modstand skal olieoverfladen behandles med en speciel genstandsolie efter grundig rengøring.
                          <br />
                          <strong>2. </strong><strong>Olieret og vokset:</strong> Overfladen er åben, men kræver lidt vedligeholdelse. Tør gulvet af med en fugtig klud i retning af kornet til rutinemæssig rengøring.
                          <br />
                          <strong>3. </strong><strong>Oljat
                            :</strong> Træet er næsten lukket og let at passe<br />
                          <strong>4. </strong><strong>lakeret
                            :</strong> Dækslet er lukkede porer og næsten vedligeholdelsesfrit. Bland varmt vand med rengørings- og plejeprodukter til rengøring. Dette tørrer gulvet fugtigt. Intensiv rengøring er ikke påkrævet for malede overflader - fugemassen forsegler overfladen helt tæt og glat.
                          <br />

                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Træbelægning
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Trægulve, undertiden også kaldet hoved, slutkorn eller slutkornstræ, har en fremtrædende status blandt alle trægulve. I modsætning til parket eller gulvbrædder bruges endekornet som et slidlag. Udsigten til de stående årringe giver ikke kun gulvene et karakteristisk og unikt udtryk, trækornet giver også træet tekniske egenskaber, der opfylder de højeste krav på alle punkter.
                          </p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Et slidstærkt og robust gulvbelægning
                            :</h4>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Mange vidnesbyrd fra historiske bygninger i byer som Graz, Dublin og Krakow vidner om, at fortovet er næsten uforgængeligt på samme tid. I de følgende år blev de ejendomme, der allerede var efterspurgte, gentagne gange krævet fra gulvet. For eksempel i storindustriens storhedstid, hvor mange producenter fik deres produktionshaller udstyret med trægulve. Gulvet var især populært inden for tung industri. Bilproducenter, støberier og stålværker er baseret på dets fordele.
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

export default plankgolv;
