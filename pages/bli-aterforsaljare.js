import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BrandCarousel from "../components/brand-carousel";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BliAterforsaljare = () => {
  return (
    <>
      <Head>
        <title>Bliv Distributør</title>
        <meta name="title" content="Bli distributör för komposit produkter i världsklass - GreenPlank.se" />
        <meta name="description" content="Bli distributör eller återförsäljare av Green Plank Premium Quality hållbar komposittrall, fasadbeklädnad, staket, plankor, plattor etc.Bli distributör eller återförsäljare av Green Plank Premium Quality hållbar komposittrall, fasadbeklädnad, staket, plankor, plattor etc." />
      </Head>
      <Layout pageTitle="Bliv-Distributør">
        <HeaderTwo />
        <PageHeader title="Bliv-Distributør" crumbTitle="Bliv-Distributør" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Bliv distributør eller forhandler af Green Plank bæredygtige produkter</h2>
                <h3 className="mb-30 mt-30">Er du interesseret i at blive distributør af Green Plank® træplastkompositprodukter?</h3>
                <div className="mb-30">
                  <p>Da efterspørgslen efter Green Plank® Wood Plastic Composite-produkter er vokset, har muligheden for distributører, grossister og forhandlere også mulighed for at samarbejde med os. Uanset om du er en lille eller stor forhandler, entreprenør, en person med et bredt netværk af kontakter eller en stor distributør, har Green Plank® et forhandlerprogram designet lige til dig!</p>
                  <p className="mb-30 mt-30">Som distributør eller forhandler af Green Plank®-produkter har du adgang til det mest omfattende udvalg af træplastkompositprodukter, såsom WPC-terrassebord, hegn, gelænder, facadebeklædning, fliser og helvedesild.</p>
                  <p className="mb-30 mt-30">Uanset hvilket forhandlerprogram du i sidste ende vælger, med Green Plank® får du:</p>
                  <strong>1. </strong>Fuld adgang til branchens mest omfattende udvalg af træplastkompositprodukter<br />
                  <strong>2. </strong>Generøs godtgørelse for produktprøver
                  <br />
                  <strong>3. </strong>Notering af din virksomhed på vores websteder
                  <br />
                  <strong>4. </strong>Attraktive engros- og distributørrabatter
                  <br />
                  <strong>5. </strong>Fuld adgang til Green Plank® medier, marketing og reklamemateriale
                  <br />
                  <h3 className="mb-30 mt-30">Hvordan bliver jeg en Green Plank®-forhandler eller distributør?</h3>
                  <p className="mb-30 mt-30">Hvis du er interesseret i at blive Green Plank®-distributør, er det meget nemt at komme i gang med det samme. For at hjælpe dig med din salgsfremmende indsats har du fuld adgang til vores omfattende udvalg af salgsfremmende og marketingmateriale. Dette inkluderer brochurer, bærbare skærme, produktprøver og tilpassede marketingmaterialer.

                  Der er tre grundlæggende muligheder for at blive distributør eller forhandler af Green Plank® træplastkompositprodukter:</p>
                  <h4 className="mb-30 mt-30">Strømfordeler</h4>

                  <strong>1.</strong>Køber produkt fra os og opbevarer lager i eget lager
                  <br />
                  <strong>2.</strong>Er klar til at købe og holde mindst 1000 kvadratmeter på lager til enhver tid
                  <br />
                  <strong>3.</strong>Viser mindst et udvalg af Green Plank® Wood Plastic Composite-produkter, hvor det er muligt
                  <br />
                  <strong>4.</strong>Fremmer aktivt Green Plank® træplastkompositprodukter
                  <br />

                  <h4 className="mb-30 mt-30">Ikke-lagerforhandler</h4>
                  <ul>
                    <strong>1.</strong>Bestiller produkt efter behov
                    <br />
                    <strong>2.</strong>Fremmer aktivt Green Plank® træplastkompositprodukter
                    <br />
                    
                  </ul>
                  <p className="mb-30 mt-30">For at blive en Green Plank® beder vi dig om at sende os en e-mail på info@GreenPlank.dk.</p>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>

    </>);
};

export default BliAterforsaljare;
