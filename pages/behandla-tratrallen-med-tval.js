import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Behandla-trätrallen.webp";
import Footer from "../components/footer";
import Head from "next/head";

const BehandlaTratrallenMedTval = () => {
  return (
    <Layout pageTitle="behandle-tratrallen-med-valg">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Behandl-tratrallen-med-valg" crumbTitle="behandle vognen" />
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
                        <h2 className="title">Behandl trævognen med sæbe</h2>
                        <div className="desc section-space--bottom--30">
                          <p>En kompositvogn giver et naturligt og varmt indtryk af dit hjem og din have. Men for at den kan bevare sin sarte farve, er det vigtigt, at du tager dig af den. Det er meget vigtigt at vaske og olie- eller laser trædæk med jævne mellemrum. Normalt hvert andet år er det nok, hvis du tænker på holdbarhed. Hvis du derimod vil give den en flot glød, bør du udføre behandlingen en gang om året.
</p>
                          <p className="mb-30 mt-30">I det klima, der hersker i store dele af Sverige, kan terrassens trædæk og dæk tåle meget. Ved at vedligeholde trædækket forlænger du dets levetid, men holder det også æstetisk tiltalende. Her er nogle tips til, hvordan du vedligeholder, vasker og giver din terrasse lidt ekstra kærlighed!
</p>
                          <h3 className="mb-30 mt-30">Hvordan rengør jeg dækket med terrassesæbe?
</h3>
                          <p className="mb-30 mt-30">Det første, du gør, er at skrubbe trædækket med sæbe for at slippe af med indbrud (brug et andet ord), for at gøre dette har du brug for en spand vand, miljøvenlig sæbe og en kratbørste, der passer både til din tegnebog og miljøet. Brug sæbe ved rengøring af terrasser om foråret. Sæbe terrassen eller trædækket i stedet for at bruge olie.
</p>
                          <p className="mb-30 mt-30">Med sæbe får træet en blød og varm følelse, og det får en flot grå finish. Samtidig tiltrækker sæbede terrasser ikke mindre pollen og forurening end et olieret terrassebord. Skyl overfladerne med en vandslange og skrub let med sæbe og vand. Sørg for, at træet altid er fugtigt.
</p>
                          <h3 className="mb-30 mt-30">Hvad er det næste trin?
</h3>
                          <p className="mb-30 mt-30">Når vognen er blevet rengjort, skal du skylle den med vand og lade trædækket tørre i et par dage i fint vejr, før du behandler det.
</p>
                          <h3 className="mb-30 mt-30">Hvordan skrubber jeg vognen med sæbe?
</h3>
                          <p className="mb-30 mt-30">Start med at feje rent på trævognen og sørg for, at den er fri for snavs. Hvis det er meget snavset, kan det være nødvendigt med en rund skrubbe før sæben.
</p>
                         
                            <strong>1. </strong>Bland sæbe i en spand med lunkent vand. Tre dl sæbe pr. 10 liter vand.
<br/>
                            <strong>2. </strong>Start derefter med at skrubbe vognen med en grov skrubbebørste. Vær forsigtig
                              at skrubbe grundigt, så hele vognen er dækket med sæbe. Hvis visse overflader er
                              Ekstremt snavset, de kan have brug for en ekstra vaskerunde inden sæbning
                              vogne.<br/>
                            <strong>3. </strong>Lad det derefter tørre ind, skyl ikke sæben af!
<br/>
                            <strong>4. </strong>Derefter kan du nyde en vogn med en blød og varm følelse. Hvis en større
                              effekt er ønsket, gentages processen, indtil det ønskede resultat er opnået.<br/>
                            <strong>5. </strong>Undgå at bruge højtryksrenser til din træterrasse, da trykket kan
                              beskadige fibrene i træet.<br/>
                          
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

export default BehandlaTratrallenMedTval;
