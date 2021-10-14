import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall1.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trall = () => {
  return (
    <Layout pageTitle="trall">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="trall" crumbTitle="trall" />
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
                        <h2 className="title">Trall</h2>
                        <div className="mb-30">
                          <p>Kompositvogn er det ultimative materiale til gulve i et udendørs miljø. Trall repræsenterer en flad overflade, der kan modstå vægt og ofte løftes fra jorden. Trækompositvogn er et hurtigt voksende byggemateriale. Trapper fås i flere former afhængigt af dets funktion, såsom terrassegulve, dækfacader, dækpæle, trapper til forskellige typer træmøbler, der vil supplere det moderne udseende af haven, hvor de er placeret.
                          </p>
                          <p>Her på greenplank kan du købe det mest omfattende sortiment, og du får faste længder og den kvalitet, du har brug for. Valget mellem en massiv trævogn eller en WPC -kompositvogn afhænger af formålet og endda ønskerne.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hvordan vogn lavet af
                            ?
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Det vedligeholdelsesfrie, holdbare terrassemateriale bruger genbrugsplast med træfibre og blandes med et andet stof. Fordi dækket er kunstigt, er det mere holdbart. For at sikre dets levetid og bevare sin skønhed over tid er regelmæssig vedligeholdelse vigtig, belægning med specielle belægninger er påkrævet om foråret og efteråret.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Byg et dæk
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Med pynt kan du hurtigt bygge en ny terrasse og terrasse eller forny den eksisterende. Det er også meget lettere end du tror at gøre et længe ventet trawlprojekt til virkelighed på egen hånd. Det eneste, der kræves, er de rigtige materialer og teknologi. Hvis dit dæk skal være udendørs hele året, er det vigtigt, at du vælger et behandlet træ, der kan tåle vores vejr - og regelmæssigt behandler træet, hvis det er nødvendigt.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>I Sverige er det frem for alt de store temperaturskift, der slider vognen mest. Vores vogne kan stå udenfor hele året. Et eksempel er vores kompositdæk, som har gennemgået tests for at sikre, at det opfylder de høje krav i det svenske klima.
                          </p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Hos ebygghandel kan du købe terrasser i lange længder. Med disse kan du bygge et dejligt terrassegulv uden fuger. For en endnu mere eksklusiv følelse har vi forskellige typer hårdttræ.
                          </p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hvilket tilbehør er nødvendigt for at lægge terrasser?

                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Ud over skruer og vinkeljern afhænger det helt af projektets omfang og design. Et vigtigt aspekt er, om din vogn skal stå på sokler eller ligge direkte på jorden, i hvilket tilfælde vognen skal have et trægulv eller et nedsænket gulv. Vi har Sveriges mest omfattende sortiment af terrasser. Med det får du let hjælp til at vælge og sammenligne fordele mellem forskellige typer af terrasser. Dækvælgeren hjælper dig også med at beregne materialeforbrug og tips til, hvordan du bygger dit dæk. Vores vognvælger giver dig indsigt i projektets omfang, og du får en god idé om omkostningerne ved vognen.
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

export default trall;
