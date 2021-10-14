import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import VideoCard2 from "../components/header/videoCard2";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Rengoring = () => {
  return (
    <>
      <Head>
        <title>Rengøring</title>
        <meta name="title" content="Trall rengöring - Hur man rengör ett trätrall ordentligt?" />
        <meta name="description" content="Låt ditt trall se ut som nytt med underhåll under hela året. Regelbunden underhåll säkerställer att den är beboelig och säker." />
      </Head>
      <Layout pageTitle="Rengøring">
        <HeaderTwo />
        <PageHeader title="Rengøring" crumbTitle="Rengøring" />
        <StickyHeader />
        <VideoCard2 />
        <section className="about-one pt-20 pb-20">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2 className="title mt-60">Naturlig forvitring og farveskift</h2>
                <div className="desc mb-30">
                  <p>I de første par måneder efter installationen vil Green Plank® -kompositprodukter naturligvis ændre farve, når de begynder at lufte til en lidt lysere nuance end den originale maling, der blev købt. Ligesom fine trægulve sker de fleste farveændringer i løbet af de første tre til seks måneder. Efter denne fase vil Green Plank® -kompositprodukter forvitre naturligt og smukt. Inkonsekvent eller ujævn eksponering for sol og elementer gør det muligt for dækket at blive ujævnt vejret. Selvom denne tilstand er midlertidig, kan du forhindre ujævn eksponering ved ikke at dække dækket med tæpper eller møbler i de første uger.</p>


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Snavs eller snavs</h3>
                        <p className="text-center">Rengør terrassen for at fjerne snavs eller snavs med varmt sæbevand og en blød børste. Brug almindelig flydende sæbe / vaskemiddel, der bruges i alle husstande</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Skimmelsvamp</h3>
                        <p className="text-center">Hvis snavs som pollen og snavs får lov til at blive på dækoverfladen, kan skimmelsvamp æde biofilmen væk. Brug en slange og varmt sæbevand med en blød børste til at fjerne madkilden og skimmelsvampen.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Is og sne</h3>
                        <p className="text-center">Calciumchlorid eller stensalt, der findes i mange hjemmecentre, smelter is ved pynt. Skyl, når det er muligt. Brug ikke metalskovle og skarpe værktøjer: de kan skade terrassens overflade.</p>
                      </blockquote>
                    </Grid>
                  </Grid>

                  <h2 className="title mt-60">Vand (garvesyre) Pletter</h2>

                  <p>Garvsyrefläckar förekommer naturligt i alla träslag och migrerar ibland till ytan i kompositplattor där ytfibrer utsätts för sol och vatten. Garvsyrefläckar kan förekomma under eller strax efter installationen. Garvsyrefläckar försvinner med tiden. Beroende på säsong kan det ta flera veckor till flera månader. När Garvsyrefläckarna försvinner när väderprocessen är klar visas de inte igen. För att påskynda borttagningen av Garvsyra, använd varmt tvålvatten eller annat kommersiellt rengöringsmedel för komposittrall och en mjuk borste. Om du använder en kommersiell rengöring av komposittrall, följ tillverkarens anvisningar.</p>


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Kridt</h3>
                        <p className="text-center">Alle farvede kridtstreger kan blive permanente. Skrubning af området med varmt sæbevand og en blød børste kan løsne noget af kridtet. Du har ikke brug for skadelige kemikalier.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Olie / fedt / madpletter</h3>
                        <p className="text-center">Alt madaffald skal fjernes hurtigst muligt. For at fjerne, skyl med en slange og brug varmt sæbevand og en blød børste til at fjerne spild fra overfladen. Skyl med varmt vand.</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mt-30 mb-30">
                        <h3 className="mt-30 mb-30 text-center">Blæk</h3>
                        <p className="text-center">Blæk kan være permanent. Skrubning med varmt sæbevand kan dog lette pletten. Skyl grundigt. Brug ALDRIG klorbaseret rengøringsmiddel.</p>
                      </blockquote>
                    </Grid>
                  </Grid>


                  <h2 className="mt-30 mb-30">GENEREL
                  </h2>
                  <p className="mt-30 mb-30">Diagrammerne og instruktionerne i denne installationsvejledning er kun vejledende og er ikke beregnet eller underforstået til at erstatte en autoriseret professionel. Al design eller brug af Green Plank® -produkter skal overholde alle lokale zonerings- og / eller bygningsregler. Forbrugeren påtager sig alle risici og ansvar i forbindelse med design, vedligeholdelse og brug af produktet.</p>
                  <h2 className="mt-30 mb-30">Ophavsret
                  </h2>
                  <p className="mt-30 mb-30">Den tekst, billeder og illustrationer, der bruges her, er egenskaber for Green Plank AB. Gengivelse helt eller delvist i enhver form eller medie uden udtrykkelig skriftlig tilladelse er strengt forbudt.</p>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Rengoring;
