import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Materialk.webp";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid"
import Head from "next/head";

const materialkostnad = () => {
  return (
    <Layout pageTitle="materialeomkostninger">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="materialeomkostninger" crumbTitle="materialeomkostninger" />
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
                        <h2 className="title">Materialeomkostninger - Alternative gulv- / terrassematerialer til trædæk, terrasse, terrasse</h2>
                        <div className="mb-30">
                          <p>Synes du, det er svært at vælge mellem et traditionelt trædæk og et vedligeholdelsesfrit trædæk i komposit? Fuldt forståeligt, det er ofte en vanskelig beslutning. På den ene side er almindelige trædæk traditionelt billigere at købe og installere, men dyre og tidskrævende / arbejdskrævende at vedligeholde. Komposit (WPC) trædæk fra Green Plank er lidt dyrere at købe, men over tid sparer du både penge og tid på grund af, at materialet næsten ikke behøver vedligeholdelse.
</p>
                          <h3 className="mb-30 mt-30">Så hvilken type trædæk er det rigtige for dig, dit hjem og din pengepung?
</h3>
                          <p className="mb-30 mt-30">Den samlede pris mellem de to muligheder vil være den afgørende faktor, købspris og løbende vedligeholdelse. Green Plank® vedligeholdelsesfrit trædæk / udendørs dæk har en stigende efterspørgsel på trods af en højere indkøbspris end traditionelle trædæk. Green Plank® trækomposit vælges ofte på grund af et materiales lange levetid (samlede økonomi), dets holdbarhed og glatte samling. Men den største afgørende faktor er, at du sparer meget tid, penge og kræfter på den lille vedligeholdelse, der kræves.
</p>
                          <p className="mb-30 mt-30">Green Plank® trækomposit (WPC) er letplejede terrassegulve / trædæk, rækværk, hegn / planker og facadebeklædning, der er fremstillet af en homogen blanding af naturlige materialer - træ og plastfiber, som er et miljøvenligt alternativ, med fordele som holdbarhed, farveægthed og reduceret vedligeholdelse. Green Plank® trækomposit, kræver ikke slibning, maling, farvning eller oliering. Den eneste vedligeholdelse, der er nødvendig, er en vask af og til, for at fjerne overfladisk skimmelsvamp og andet snavs, det vil sige en normal rengøring. Green Plank® -trækomposit koster lidt mere end traditionelle trædæk, men på sigt kan det betale sig. Du fjerner den årlige vedligeholdelse, og behovet for at udskifte råd, svamp og insektangreb forsvinder fuldstændigt.
</p>
                          <h4 className="mb-30 mt-30">MILJØVENLIGT</h4>
                          <p className="mb-30 mt-10">Alt materiale genanvendes fra kasserede træ- og plastgenstande. Green Plank® -komposit indeholder INGEN træbeskyttelsesmidler, formaldehyd, arsen eller lignende (hvilket trykimprægneret gør). På trods af dette er Green Plank® komposit terrassegulve / trædæk resistente over for råd og svamp.
</p>
                          <p className="mb-30 mt-10">Green Plank® komposit trækomposit er et stilfuldt, holdbart og letplejet alternativ til traditionelle materialer. Der er to typer af Green Plank® kompositpaller, hule eller massive profiler.
</p>
                          <h4 className="mb-30 mt-30">Installationsomkostninger
</h4>
                          <p className="mb-30 mt-10">Omkostningerne ved montering af dæk afhænger af typen af ​​materiale, der skal bruges, og om du ansætter en entreprenør eller installerer dækket selv. Omkostningerne ved underbygningen bør være de samme for både kompositspaletter og traditionelt træ. Installation af kompositvogne fra Green Plank® koster cirka 25% mere end installation af traditionelle trædæk.
</p>
                          <p className="mb-30 mt-10">Installationsomkostninger for alle dæk er angivet for grundmodeller uden andre muligheder såsom dekoration og belysning, der øger installationsomkostningerne.
</p>
                          <h3 className="mb-30 mt-30">FORDELE VED AT BRUGE GREEN PLANK® VEDLIGEHOLDELSESFRIE SAMMENSÆTNINGSPRODUKTER
</h3>
                          <Grid container spacing={3}>
                            <Grid item xs={6} sm={6}>
                              
                                <strong>1. </strong>vandafvisende
<br/>
                                <strong>2. </strong>Tåler hårde klimaer
<br/>
                                <strong>3. </strong>Vedligeholdelsesfri
<br/>
                                <strong>4. </strong>Let rengøring
<br/>
                                <strong>5. </strong>Høj skridsikkerhed
<br/>
                                <strong>6. </strong>Dimensionelt stabil
<br/>
                                <strong>7. </strong>Frostsikker
<br/>
                                <strong>8. </strong>Lugter ikke / er ikke-giftig
<br/>
                                <strong>9. </strong>Holder længe
<br/>
                                <strong>10. </strong>Ruster ikke
<br/>
                              
                            </Grid>
                            <Grid item xs={6} sm={6}>
                              
                                <strong>11. </strong>Modstår insektangreb
<br/>
                                <strong>12. </strong>Rot-bevis
<br/>
                                <strong>13. </strong>Fremragende termiske egenskaber
<br/>
                                <strong>14. </strong>Antistatisk
<br/>
                                <strong>15. </strong>Stort udvalg af farver og modeller
<br/>
                                <strong>16. </strong>Fri for formaldehyd
<br/>
                                <strong>17. </strong>UV -resistent
<br/>
                                <strong>18. </strong>Miljøvenligt
<br/>
                                <strong>19. </strong>100% genanvendeligt
<br/>
                              
                            </Grid>
                          </Grid>


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

export default materialkostnad;
