import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Linoleum.webp";
import Footer from "../components/footer";
import Head from "next/head";

const linoleumgolv = () => {
  return (
    <Layout pageTitle="Linoleumsgulv">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Linoleumsgulv" crumbTitle="Linoleumsgulv" />
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
                        <h2 className="title">Linoleumsgulv</h2>
                        <div className="mb-30">
                          <p>Linoleum var en af ​​de førende elastiske gulvbelægninger indtil 1950'erne - da det stort set blev erstattet af PVC. Men i hvert fald som et nicheprodukt til miljøbevidste bygherrer har gulvet overlevet den dag i dag. Linoleum er et bæredygtigt naturmateriale, der endda kan komposteres i slutningen af ​​dets levetid.
                          </p>
                          <p>Ligesom tæpper fremstilles det traditionelt som elastiske rulleprodukter, men industrien tilbyder nu også lakprodukter, der kendes fra laminat- eller designgulve. I tilfælde af rullevarer bruges jutestof normalt som et substratlag; i tilfælde af mindre paneler i flise- eller plankeform, er basen normalt lavet af træbaserede materialer. Ofte er der et ekstra lag kork for at øge gulvets lydisolering.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Ingredienser:
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Linoleums sammensætning og egenskaber er internationalt standardiseret. I Europa er der EN 548 ("Modstandsdygtige gulvbelægninger - specifikation for linoleum med og uden mønstre"). De vigtigste komponenter i det naturlige produkt er oxideret linolie (ca. 32%) og naturlige harpikser (8%). Der findes også organiske fyldstoffer, såsom kork- eller træmel (40%) og uorganiske fyldstoffer, såsom kalkpulver og farvepigmenter (20%).
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Egenskaber:</h3>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Linoleum som gulvbelægning har mange fordele:
                          </p>

                          <strong>1. </strong>Det er holdbart og elastisk og frem for alt ekstremt trykbestandigt. Det elastiske materiale er f.eks. Velegnet til stolhjul. Midlertidige deformationer opstår under trykbelastninger, men disse vender hurtigt tilbage. Betrækket er også skånsomt mod leddene, varmt på fødderne og skridsikkert. Det sunde levende naturprodukt bruges også ofte på skoler, børnehaver og hospitaler og er let at passe.
                          <br />
                          <strong>2. </strong>Andre egenskaber: Linolieolie er et flammehæmmende middel, hæmmer støj ved fodfald, oplades ikke elektrisk (antistatisk effekt) og har endda en antibakteriel virkning på grund af den oxiderede linolie (linoxin). De scorer også med deres meget gode farveægthed - selv når de udsættes for sollys - og er ufølsomme over for olier, fedtstoffer og de fleste andre kemiske belastninger. Du bør dog undgå at bruge stærke alkaliske rengøringsmidler (lud) til vedligeholdelse
                          .<br />
                          <strong>3. </strong>Velegnet til trapper
                          .<br />
                          <strong>4. </strong>Velegnet til gulvvarme (når den er fuldt limet)
                          <br />
                          <strong>5. </strong>80% fra vedvarende råvarer, bionedbrydeligt.
                          <br />

                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Ulemper:</h3>

                          <strong>1. </strong>Linoleum er dog ganske uegnet til vådrum. Det naturlige materiale er følsomt over for fugt og kan rådne eller svulme op som træ, når det udsættes for overdreven fugt
                          <br />
                          <strong>2. </strong>Denne egenskab angiver også en fordel ved materialet. Fordi gammelt linoleum er biologisk nedbrydeligt, kan det komposteres.
                          <br />
                          <strong>3. </strong>Der kan udvikle sig et modneslør.
                          <br />

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

export default linoleumgolv;
