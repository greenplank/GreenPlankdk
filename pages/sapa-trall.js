import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Såpa.webp";
import Footer from "../components/footer";
import Head from "next/head";

const sapaTrall = () => {
  return (
    <Layout pageTitle="sapa-trall">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="sapa-trall" crumbTitle="sapa-trall" />
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
                        <h2 className="title">Sæbevogn</h2>
                        <div className="mb-30">
                          <p>En kompositvogn giver et naturligt og varmt indtryk af dit hjem og din have. Men for at den kan bevare sin sarte farve, er det vigtigt, at du passer godt på den. Det er et must at vaske og olie eller glasere trædæk med jævne mellemrum. Hvert andet år er det normalt nok, hvis man kun tænker på bæredygtighed. Hvis du derimod vil give den en flot glød, bør du udføre behandlingen en gang om året.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Planker kan laves af alle træsorter, der kan skæres til den ønskede bredde uden at revne. Tørt og formstabilt træ er ønskeligt for at opnå en langvarig overflade, der er fri for forskydning og samlinger.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>I det klima, der hersker i store dele af Sverige, kan terrassens trædæk og dæk tåle meget. Ved at vedligeholde trædækket forlænger du dets levetid, men holder det også æstetisk tiltalende. Vi giver tips til, hvordan du vedligeholder, vasker og giver din terrasse lidt ekstra kærlighed!</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hvordan rengør jeg dækket med terrassesæbe?</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Det første, du gør, er at sæbe skrubbe trædækket for at slippe af med indbrud, og dette kræver en spand vand, miljøvenlig sæbe og en skrubbe, der passer både til din tegnebog og miljøet. Brug sæbe ved rengøring af terrasser om foråret. Sæbe terrassen eller trædækket i stedet for at bruge olie.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Med sæbe får træet en blød og varm følelse, og det får en flot grå finish. Samtidig tiltrækker sæbedæk ikke så meget pollen og forurening som en olieret vogn. Skyl overfladerne med en vandslange og skrub let med sæbevand. Sørg for, at træet altid er fugtigt.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hvordan har du det?
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Når hele kroppen er blevet renset, skal du skylle den med vand og lade trædækket tørre i et par dage i fint vejr, før du behandler det.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hvordan skrubber jeg vognen med sæbe?
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Start med at feje rent på trævogn i komposit og sørg for, at den er fri for snavs. Hvis det er meget snavset, kan det være nødvendigt med en rund skrubbe før sæben.
                          </p>

                          <strong>1. </strong>Bland sæbe i en spand med lunkent vand. Tre dl sæbe pr. 10 liter vand.
                          <br />
                          <strong>2. </strong>Start derefter med at skrubbe vognen med en grov skrubbebørste. Sørg for at skrubbe omhyggeligt, så hele vognen er dækket med sæbe. Hvis nogle overflader er meget snavsede, har de muligvis brug for en ekstra omgang vask, inden vognen sæbes.
                          <br />
                          <strong>3. </strong>Lad det derefter tørre ind, skyl ikke sæben af!
                          <br />
                          <strong>4. </strong>Så kan du nyde en klapvogn med en blød og varm følelse. Hvis der ønskes en større effekt, gentages processen, indtil det ønskede resultat opnås.
                          <br />
                          <strong>5. </strong>Undgå at bruge højtryksvask til din træterrasse, da trykket kan beskadige fibrene i træet.
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

export default sapaTrall;
