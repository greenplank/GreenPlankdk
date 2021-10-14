import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-Ersättnings.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallersattnings = () => {
  return (
    <Layout pageTitle="tip til udskiftning af traller">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="tip til udskiftning af traller" crumbTitle="tip til udskiftning af traller" />
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
                                <h2 className="title">Tips til udskiftning af traller
</h2>
                                <div className="mb-30">
                                    <p>Overvejer du at udskifte dit dæk eller installere et nyt dæk? Gør ikke et køb, før du ser på Green Plank® kompositfliser med lav vedligeholdelse. Tidligere var det eneste valg, når man skulle bygge et dæk, at gå med trykbehandlet træ. Selvom dette var et fremskridt i forhold til ubehandlet træ, var der stadig meget arbejde og vedligeholdelse involveret i disse typer dæk, og de havde stadig en relativt kort levetid. I dag, med fremskridtene inden for sammensatte byggematerialer på markedet, har husejere nogle interessante muligheder, når de skal vælge det rigtige dækmateriale. At kende omkostningerne på forhånd kan også hjælpe dig med at træffe den rigtige beslutning, når det kommer til valg af vognmaterialer, og hvem du skal ansætte til at udføre jobbet.
</p>
                                    <p className="mb-30 mt-30">Der er mange grunde til at vælge Green Plank® kompositfliser med lavere vedligeholdelse end traditionelt træ. Nedenfor er nogle af de bedste grunde til at vælge dette revolutionerende byggemateriale.
</p>
                                    <h3 className="mb-30 mt-30">Dæk med lav vedligeholdelse
</h3>
                                    <p className="mb-30 mt-30">I modsætning til traditionelt træ modstår Green Plank® fliser med lav vedligeholdelse sol og vandskader. Det betyder, at dit dæk vil beholde sin farve og form i flere år uden regelmæssig vedligeholdelse fra dig. Ingen slibning, farvning, oliering eller behandling er nødvendig, hvilket sparer meget tid og penge i hele dit dæk. Fordi Green Plank® kompositfliser med lav vedligeholdelse ikke vrider sig eller rådner, behøver du aldrig at udskifte beskadigede plader. Efter et år med et Green Plank® -kompositdæk med lav vedligeholdelse undrer du dig over, hvorfor du ikke udskiftede dit gamle dæk tidligere!
</p>
                                    <h3 className="mb-30 mt-30">Slidstærkt dæk
</h3>
                                    <p className="mb-30 mt-30">Green Plank fremstiller så holdbart vognmateriale, at vi tilbyder en begrænset 15-årig boliggaranti ved hvert køb. Green Plank® -kompositprodukter med lav vedligeholdelse er virkelig skabt til at klare tidstesten. Pigmenterne, der bruges til at farve Green Plank®, er UV-resistente, hvilket betyder, at de falmer meget langsommere end traditionelle pletter på træ, så dit dæk vil blive ved med at se smukt ud i mange år.
</p>
                                    <h3 className="mb-30 mt-30">Barfod dæk
</h3>
                                    <p className="mb-30 mt-30">Green Plank® fliser med lav vedligeholdelse opfylder de internationale standarder for skridsikre overflader. Materialet går ikke i stykker, så du behøver ikke bekymre dig om at få smertefulde splinter i dine hænder og bare fødder. Nogle af de vedligeholdelsesfrie Green Plank®-kompositprodukter er endda brandsikre, hvilket kan være en uvurderlig funktion i tilfælde af en lille brand, der startes af en grill eller pejs.
</p>
                                    <h3 className="mb-30 mt-30">Forøg værdien af ​​dit hjem
</h3>
                                    <p className="mb-30 mt-10">Hvis du designer dit dæk korrekt, kan du ikke kun øge din livskvalitet, men også øge værdien af ​​dit hjem ved at tilføje et Green Plank® -kompositdæk med lav vedligeholdelse. Hvis du bygger et ikke-rektangulært dæk og arbejder på at gøre rummet til en forlængelse af din stue, kan dit dæk give et afkast på 80-100% af din investering, når du sælger dit hjem.
</p> 
                                    <h3 className="mb-30 mt-30">Miljøvenligt dæk
</h3>
                                    <p className="mb-30 mt-10">Ingen træer er nogensinde hugget for at skabe Green Plank®-kompositprodukter med lav vedligeholdelse I stedet er kompositmaterialet fremstillet af træmel genbrugt fra træbearbejdningsindustrien, genbrugt og genbrugt plast og additiver med ekstruderingssystemet. Disse materialer er ellers ubrugte på lossepladser. Brug af bæredygtige materialer og grønne fremstillingsprocesser er en politik, der påvirker alt, hvad Green Plank gør.
</p>
                                    <p className="mb-30 mt-10"><strong>Tips:</strong> Undersøg bjælkerne og stolperne på den gamle dækramme for råd og andre skader. Kontroller afstanden mellem midten og midten mellem gulvbjælkerne. Green Plank® -kompositdækplader med lav vedligeholdelse kræver, at bjælkerne maksimalt må være 40 cm c / c til boligdæk. For kommercielle dæk ville det være 25 cm eller mindre i midten.
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

export default trallersattnings;
