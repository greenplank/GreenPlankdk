import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/kork-golv.webp";
import Footer from "../components/footer";
import Head from "next/head";

const Korkgolv = () => {
  return (
    <Layout pageTitle="Kork gulv">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Kork gulv" crumbTitle="Kork gulv" />
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
                        <h3 className="block_title">Kork gulv</h3>
                        <div className="desc section-space--bottom--30">
                          <p>Det yderste vævslag i periderm kaldes proppen. Det dannes af kork cambium. I daglig brug refererer udtrykket kork til materialet fra korkens kork, hvorfra hovedsageligt propper udvindes. Kork udvindes også fra barken af ​​det asiatiske korktræ Amur.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Ejendomme:</h3>
                          <p>Et korkgulv dæmper fodsporene, isolerer nedad og ser varmt og hyggeligt ud. Og det har et andet plus: Som designgulv kan kork få sit ønskede udseende, fra træ til beton.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Kork er et materiale med fremragende egenskaber. Den er elastisk, har en meget god isolerende effekt og er uigennemtrængelig for vand. Ikke underligt, at kork engang blev brugt som en flaskeprop. Men dette ville forkert begrænse den mulige anvendelse af det naturlige materiale. Udover de tidligere nævnte egenskaber er det også praktisk, et 100 procent naturligt, fornyeligt råmateriale og med sit behagelige udseende og præg, er det også perfekt som levende materiale - for eksempel som et korkgulv.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Klassisk lægges kork som massive fliser, der limes til underlaget og derefter forsegles. Selvklæbende kork fås i forskellige størrelser, formater og nuancer. Farverne på korkgulve spænder fra klassiske, mørke honningtoner til moderne hvide og grå toner. Udseendet af træ, sten eller beton samt abstrakte mønstre er også muligt for et korkgulv takket være nutidens forarbejdnings- og trykteknikker. Tykkelsen af ​​korklaget på gulvet er normalt mellem fire og seks millimeter. Sådan isolerer kork gulvet og viser sig at være perfekt til stuen - især hvis du har korkparket eller korkparket som alternativ til korkfliser. De allerede forseglede korkplanker kan enten limes til hinanden eller klikkes ind i hinanden med tunge og rille. På denne måde kan et korkgulv også lægges flydende, dvs. den er ikke forbundet til undergulvet. Hvis korkgulvet ikke længere trives, eller hvis et træk venter, kan det hurtigt fjernes.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hvordan installeres korkgulvet?:</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>På samme måde som laminat eller kliklinoleum kan korkparket også lægges med lidt manuel færdighed takket være enkle kliksystemer. Det viser sig at være særlig vigtigt, at overfladen er helt solid, ren og jævn. Dette er den eneste måde at opnå et tilfredsstillende resultat. Gamle belægninger såsom PVC eller tæpper skal fjernes helt. Hvis gulvet viser yderligere uregelmæssigheder større end 0,2 mm pr. Meter, skal disse udjævnes.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Typer af korkgulve</h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Der findes stort set tre typer korkgulvbelægninger: korkfliser (også kaldet korkparket), korkklare gulve (også kaldet korkparket) og korkmosaik. Den såkaldte rullehætte er ikke en overfladebelægning, den bruges som underoverflade til andre typer gulve, fordi den har en lydabsorberende effekt, er elastisk og samtidig stabil.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Korkfliser (korkparket)</h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Korkplader består af granulat eller stykker af naturlig kork med et bindemiddel. De limes direkte til undergulvet. De fås i en homogen eller fineret struktur, med forskellige mønstre og i forskellige farver. Overfladerne er naturlige, olie, voks, gennemsigtige eller farvede og forseglede. Materialernes tæthed er normalt mellem 420 og 480 kg / m³, især holdbare produkter når op til 550 kg / m³. Pladetykkelsen er normalt 4 mm, men pladerne 6 eller 8 mm tykke er også tilgængelige.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Korkfarvet gulv (korkproduceret)</h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Præfabrikerede korkgulve er præfabrikerede elementer, der kan installeres flydende, med en fjeder- og notforbindelse, der normalt går rundt. De består af et korklag som en overflade (lavet af granulat eller stykker med et bindemiddel), en støtteplade og en modspænding, normalt lavet af kork. Disse præfabrikerede elementer er normalt omkring 12 mm tykke og fås også i forskellige designs og panelstørrelser.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Kork mosaik</h4>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Korkmosaik er lavet af cirkulære korkfliser. Lim og fugemasse brug af permanent elastisk kunstharpiks sikrer, at gulvoverfladen er stram. Korkmosaik fås i paneler med en bærerfilm ovenpå, der kan skrælles af efter limning. Det er fugtbestandigt og er farvet, kalket, ubehandlet eller forseglet uden yderligere behandling. Forskellige fugemasser kan bruges til forskellige gulvkrav, som fås i flere farver. Højden på blodpladerne er normalt 6 mm.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Korkgulv: rengør, vedligehold, slib ned:</h4>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Kork er et letplejet gulv. Lejlighedsvis tørring og støvsugning er nok til at holde korkgulvet rent. På samme tid sikrer det som et naturprodukt med sine antistatiske egenskaber mere renhed i husstanden.</p>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Når du køber korkgulve, skal du altid sørge for, at der ikke er blevet anvendt opløsningsmiddelbaserede lakker til tætning. I nogen tid har der været mange naturlige vandbaserede harpikser og tætningsvoks, der - i modsætning til mange kemiske midler - ikke forårsager ubehagelige dampe på det nye korkgulv. Den mest naturlige måde at pleje og forfine kork- og korkgulve er med naturlige olier eller voks.</p>
                          <p style={{ marginBottom: 30, marginTop: 10 }}>Et massivt korkgulv kan lejlighedsvis slibes og forsegles igen med en tætning. Dette giver det interessante korn og den varme farve af det naturlige materiale en ny glans. Vær dog forsigtig med trykte korkgulve, de kan miste deres ydre udseende, når de slibes.</p>
                          <h4 style={{ marginBottom: 30, marginTop: 30 }}>Fordele:</h4>
                        
                            <strong>1. </strong>Let at passe<br/>
                            <strong>2. </strong>Fodfald og lydabsorberende<br/>
                            <strong>3. </strong>Antistatisk<br/>
                            <strong>4. </strong>Varm under fødderne<br/>
                            <strong>5. </strong>Fleksibel, fleksibel<br/>
                            <strong>6. </strong>Isolerende<br/>
                          
                          <h4 style={{ marginBottom: "10px", marginTop: "30px" }}>Ulemper:</h4>
                        
                            <strong>1. </strong>Udvides, så den kan kun lægges med en ekspansionsfuge<br/>
                            <strong>2. </strong>Ikke alle korkgulve er egnede til gulvvarme<br/>
                            <strong>3. </strong>Uegnet til fugtige rum som køkken eller badeværelse<br/>
                            <strong>4. </strong>Tunge møbler kan efterlade mærker<br/>
                            <strong>5. </strong>For meget sollys kan få det til at falme<br/>
                          
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

export default Korkgolv;
