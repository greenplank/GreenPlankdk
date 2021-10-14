import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";
import heart from "../assets/images/shapes/heart-2-1.png";
import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
import faqImage from "../assets/images/resources/faq-box-1-1.jpg";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const FaqOne = () => {
  return (
    <section className="faq-one pt-120">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-one__content">
              {/* <div className="block-title">
                <h3>
                  Charity for the people you care about.
                </h3>
              </div> */}

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="0"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    Dit grønne planke kompositdæk, facadebeklædning, hegn og rækværk spørgsmål besvaret
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Vi foreslår, at du først prøver at finde svaret på dit spørgsmål i nedenstående FAQ - Ofte stillede spørgsmål til træplastkomposit eller WPC-produkter.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    Sparer Green Plank-sammensatte produkter mig virkelig penge på lang sigt?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      Ja, de oprindelige omkostninger ved vores sammensatte produkter kan være marginalt højere end trykbehandlet træ, men billigere end hårdttræ. Og inden for få år vil din sammensatte terrassebord, beklædning eller hegn genvinde forskellen. Dette skyldes, at Green Plank kompositprodukter af naturlige fibre kræver minimal indsats for at holde dem flotte, hvilket betyder, at vedligeholdelsesomkostningerne er lave. Efterhånden som omkostningerne ved behandling og arbejdskraft til traditionelt trædæk, beklædning eller hegn øges, er vores kompositprodukter den perfekte omkostningseffektive løsning.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    Er kompositprodukter af grønt planketræ miljøvenlige?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      Ja. Green Plank er det førende mærke af miljøvenligt træplastkomposit / naturlige fibre kompositplanker, rækværk, hegn og beklædningssystem designet til at maksimere din udendørs opholdsoplevelse. Alle de ingredienser, vi bruger, genanvendes. Green Plank naturlige fibre sammensatte produkter kombinerer holdbarheden af ​​plastik og styrken af ​​træ / ris skalfibre for at producere et overlegen byggeprodukt.

                      Green Plank WPC / NFC-produkter splintrer ikke, vrider eller falmer, som træet gør, det reducerer dramatisk den spildte reparations- og udskiftningscyklus og eliminerer den hyppige anvendelse af miljøskadelig maling, forseglere og pletter.

                      Green Plank træplastkomposit eller naturlige fibre Kompositprodukter er fremstillet med genbrugte træ / risskalfibre, der ellers går på lossepladser. Derudover er Green Plank i stand til at genopskrive skrotproduktet tilbage i fremstillingsprocessen.

                      Green Plank genbruger vand under fremstillingsprocessen.

                      I modsætning til træ er kompositprodukter af Green Plank-træplast / naturlige fibre et engangskøb for de fleste husejere.

                      Green Plank træplastkompositter / naturlige fibre komposit kræver ikke maling, farvning eller forsegling.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                    Er Green Plank kompositprodukter UV-beskyttet?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <p>
                      Green Plank naturlige fibre kompositprodukter indeholder UV-hæmmede pigmentsystemer, der reducerer falmning. Men det kan falme over tid i stærkt sollys. Normalt bliver kompositprodukter lysere i farvetone, når de falmer.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                    Kan Green Plank naturlige fibre kompositplanker bruges til at bygge en dock?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                      Ja, Green Plank MARINE ™ kompositplanker kan bruges som dockeplanking, anløbsbroer, udsigtspunkter, fritidsområder, promenader, strandpromenader, lystbådehavne og andre kommercielle eller tunge projekter, men det kan ikke bruges til nogen strukturel supportmedlemmer, og det bør ikke nedsænkes kontinuerligt i vand. For information om kommercielle applikationer, kontakt Green Plank.

                      For detaljer om sammensatte strukturelle støtteprodukter bedes du kontakte Green Plank.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="5">
                    Kan jeg fastgøre Green Plank Composite Decking over et eksisterende dæk, altan eller veranda?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="5">
                    <p>
                      Composite pyntede er beregnet til at blive installeret direkte på de strukturelle bjælker. Fastgør IKKE vores kompositplanker til toppen af ​​gamle eksisterende dækplanker eller altaner og verandaer.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="6">
                    Kan jeg bruge højtryksrenser til rengøring af mit kompositdæk?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="6">
                    <p>
                      Husholdnings højtryksrensere med sprøjtedyse kan bruges til at fjerne pletter, jord i snavs eller skimmel, men risikerer at sprøjte sæbe på andre overflader. Hvis du vælger at bruge en højtryksrenser, skal du holde mindst en afstand på 30 cm mellem motorstrålen og overfladen på dækbrættet.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="7">
                    Kan Green Plank naturlige fibre sammensat terrassebord bruges omkring bassiner og kurbade?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="7">
                    <p>
                      Absolut. Green Plank naturlige fibre kompositplanker absorberer ikke vand og er blevet brugt i vid udstrækning i nærheden af ​​bassiner, kurbade og i marine miljøer rundt om i verden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="8">
                    Pletter, falmer eller ridser Green Plank kompositdæk let?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="8">
                    <p>
                      Lad os tage disse problemer i orden. For det første indeholder Green Plank kompositplank træ, enten savsmuld eller formalet træ eller risskalefibre. Dette materiale kan absorbere væsker såsom olie, og resultatet kan være en plet. Selv topmærker pyntede kan plette, hvis olie, maling, juice eller andre væsker ikke hurtigt renses op.

                      Komposit terrassebord falmer typisk lidt, hvis overhovedet, i den første sæson. Derefter bliver farven stabil. Selvom Green Plank konstant arbejder på at forbedre UV-beskyttelsen i sine produkter for at reducere eller eliminere falmning.

                      Endelig vil kompositdæk ridse, hvis tunge genstande såsom møbler trækkes hen over det. Selv skarpe kæledyrskloer og sand kan forårsage ridser ligesom træplanker. Imidlertid er ridserne typisk overfladiske, og med tiden blander de sig. For at forhindre ridser skal du samle dækmøbler op, når du flytter det, og koster løst snavs fra terrassen for at forhindre slid på kompositpladen.

                      En anden måde at forhindre møbler i at beskadige dit sammensatte terrassegulv er at investere i beskyttende kopper, måtter eller puder. Når du har købt dem, skal du sørge for at placere dem under alle bord- og stolben, der kommer i kontakt med dit dækgulv. Introduktionen af ​​disse beskyttende kopper, måtter eller puder forhindrer dine møbler i at have direkte kontakt med dit dæk og hjælper med at forhindre dine møbler i at beskadige dit dækgulv.

                      Nogle af vores kunder har brugt mindre / mellemstore sandpapir til behandling af mindre ridser eller ridser. Hvis pletterne er sat på planker, kan du også bruge et fint sandpapir og sand let efterfulgt af en stålbørste til at kornre pyntingen igen. Følg altid trækornets overflade. Det slibede område vejrer tilbage i cirka 8-10 uger, men kan meget afhængigt af placering og specifik anvendelse.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="9">
                    Kræver dæk byggetilladelser eller byggetilladelse?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="9">
                    <p>
                      I de fleste samfund kræves en byggetilladelse til at bygge et dæk. Hovedårsagen er at sikre sikkerheden for alle, der bruger strukturen. Der har været mange uheldige tilfælde, hvor dæk, trapper eller gelændere, der blev bygget med dårligt design eller materialer, er kollapset og forårsager personskade eller død. Oftest blev sådanne krævede dækstilladelser ikke opnået i sådanne tilfælde. Når der ikke opnås en dækbygningstilladelse, og noget går galt, udsættes boligejeren for civile og strafferetlige sanktioner. Det giver mening at få byggetilladelse fra den lokale bygningsafdeling, så dækket kan inspiceres som et middel til at beskytte dig og andre.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="10">
                    Kræver Green Plank naturlige fibre kompositplader, trimmer, planker eller bjælker forboring?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="10">
                    <p>
                      Det er nødvendigt at forbore og forsænke, inden du skruer trimmerne, bjælkerne og terrassebordene (med konventionel installation).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="11">
                    Har jeg brug for specielle værktøjer til installation af Green Plank Composite Decking?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="11">
                    <p>
                      Green Plank kompositprodukter kan skæres, bores og fastgøres ved hjælp af konventionelle værktøjer. Husk at bære sikkerhedsbriller og beskyttelsestøj af hensyn til din sikkerhed.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="12">
                    Rotner naturlige plankefibre af kompositdæk af grønne planker?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="12">
                    <p>
                      Kompositplanker såsom Green Plank pyntede er meget modstandsdygtige over for rådne på grund af plastindholdet. De oprindelige omkostninger er mere for kompositplanker, men det kræver mindre vedligeholdelse og vil give dig flere års service, i de fleste tilfælde.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="13">
                    Har decking et godt investeringsafkast (ROI)?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="13">
                    <p>
                      Green Plank kompositdæk øger din boligværdi og er derfor en god investering, især når dækket er smukt designet til at blande sig med husets arkitektur, og det er korrekt bygget til sikkerhed og ydeevne.

                      Statistik indsamlet fra ejendomsmæglere viser, at dæk tilføjer værdi til huset, og op til 80 procent af omkostningerne ved et dæk kan inddrives ved salg, hvis dækket er velholdt. Kort sagt, dæk har god ROI.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="14">
                    Kan jag fästa Green Plank komposittrall över ett befintligt däck, balkong eller veranda?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="14">
                    <p>
                      Komposittrall är avsedd att installeras direkt på strukturbjälkarna. Fäst INTE våra komposittrallplankor på toppen av gamla befintliga däck plankor eller balkong- och verandagolv.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="15">
                    Bliver Green Plank composite pyntede varme om sommeren?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="15">
                    <p>
                      Ethvert materiale bliver varmt at røre ved varme sommerdage. Grønne plankekompositter opvarmes med samme hastighed som naturligt træ. dvs. varmere end græs, men ikke så varmt som brolægning, metal eller beton.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="16">
                    Hvordan gør kompositplader bevægelser?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="16">
                    <p>
                      Træ- eller kompositplanker bevæger sig alle, men i forskellige retninger og af forskellige grunde. Kompositplader udvides mere i længden, mens træplader udvides over bredden. Kompositplank bevæger sig hovedsagelig på grund af varme, mens træplanker bevæger sig, når dets fugtindhold ændres. Begge typer bevægelse er naturfunktioner og overvindes ikke let.

                      Kompositplader, beklædnings- eller hegnplader ændrer størrelse med temperaturen, krymper, når temperaturen falder og udvides, når den stiger. Ændringen sker med en ensartet hastighed, der ikke afhænger af retning, bortset fra at den bemærkes mere over længden simpelthen fordi brædderne er længere, end de er brede. I koldt vejr har geringsfuger i komposit tendens til at springe. I varmt vejr kan trykket fra ekspanderende plader stramme geringsfuger eller kile dem åbne.

                      Træ handler anderledes. Da dets fugtindhold ændres, udvides eller krymper træ over bredden af ​​brættet. Dette får geringsleddet til at åbne ved tåen (den spidse ende af snittet) eller hælen (den ikke så spidse ende af snittet). Hvilken del af geringsfugen, der åbnes, er direkte relateret til fugtindholdet i brædderne, når de installeres. Et vådt bræt tørrer ud og får hælen til at åbne sig. Et tørt bræt udvides, når det får fugt, hvilket får tåen til at åbne sig.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="17">
                    Hvordan rengør jeg og vedligeholder Green Plank træ kompositdæk?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="17">
                    <p>
                      Alle udvendige overflader samler snavs, støv og forurenende stoffer. Det er nødvendigt at rengøre dem med jævne mellemrum for at holde dem flotte. Green Plank® trækompositter er produkter med lav vedligeholdelse og ikke produkter uden vedligeholdelse.

                      Periodisk rengøring af Green Plank® kompositprodukter anbefales, selvom de ser rene ud, er det vigtigt at forhindre ophobning af pollen / snavs, der kan forårsage skimmel.

                      Vi anbefaler en grundlæggende rengøring med en kompositrenser eller en kombination af sæbe (opvaskemiddel), varmt vand og en blød børste. Efter rengøring skylles grundigt. Hvis du er usikker på, om produktet bruges til at rense / fjerne pletter fra dit dæk, anbefales det, at du tester et lille område på et iøjnefaldende sted for at afgøre, om produktet vil forårsage uønsket misfarvning.

                      Slang hele dækket af med en haveslange og ikke med en højtryksrenser. Højtryksrenseren sprøjter sæbepartikler på andre overflader og kan muligvis forårsage pletter. Brug af en haveslange er en bedre praksis for forsigtigt at skylle hjemmelavet rengøringsmiddel af og slippe af med alle vandpletter.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="18">
                    Hvordan påvirker vejrcyklusser Green Plank Decking og Railing under installationen?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="18">
                    <p>
                      Green Plank naturlige fibre kompositprodukter klarer sig godt under skiftende vejrforhold. Under installationen trækker den kun lidt sammen i koldt vejr, men udvides i varmt vejr. Vi anbefaler, at du lader materialet akklimatisere på jobstedet i 48 timer før installationen. Følg afstandsretningslinjerne i installationsvejledningen for at imødekomme enhver udvidelse og sammentrækning.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="19">
                    Hvor lang er garantien på Green Plank kompositprodukter?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="19">
                    <p>
                      Detaljer om vores garanti kan findes i kundeserviceafsnittet på dette websted.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="20">
                    Hvor meget plads er der behov for at sikre korrekt ventilation under et Green Plank kompositdæk?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="20">
                    <p>
                      Et klart 50 mm mellemrum mellem bjælkernes nederste kant og lønklasse anbefales for at sikre tilstrækkelig ventilation.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="21">
                    Hvor meget flytter dækplader gennem året?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="21">
                    <p>
                      Om dækplader krymper eller svulmer afhænger af det materiale, der bruges til at bygge dækket. Træ, der ikke er trykbehandlet, vil helt sikkert ekspandere og trække sig sammen, når det er vådt. Når det tørrer, krymper træet. Disse cyklusser vil til sidst få træplader til at kæde sig og revne. Dette gælder endda for cedertræ og terrassedæk, når det ældes.

                      Komposit terrassebord absorberer ikke fugt, men det ekspanderer og trækker sig sammen i længden med temperaturvariationen.

                      Det er vigtigt at læse vores installationsvejledning, før du installerer Green Plank kompositplankemateriale. Når det bliver varmt, udvider det sig mere end træ i længden, men mindre i bredden. Jo længere dækpladen er, jo større er dens udvidelse, og jo mere skal du tage højde for dette, når du bygger dit dæk. Kontroller produktets endeafstandsdiagram (head-to-head), der beskriver det nødvendige mellemrum mellem enderne af to planker med længden af ​​hvert kort, temperaturen under installationen og den højeste omgivelsestemperatur, du forventer i dækområdet . For eksempel kan et 5 meter langt kompositdækbræt installeret ved 10 grader Celsius udvide sig med så meget som 3 mm i hver ende af brættet, så du skal bruge mindst 6 mm mellemrum mellem enderne af to dækplader.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="22">
                    Hvordan skal Green Plank kompositprodukter opbevares?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="22">
                    <p>
                      Hvis du planlægger at opbevare kompositprodukter fra Green Plank inden byggeriet, skal produkterne opbevares indendørs under dækning for at opretholde en ren overflade. Hvis genstande skal opbevares udenfor, skal de være ordentligt beskyttet for at forhindre direkte interferens fra sollys, regn, fugt osv. Produktet skal være tæt stablet i skyggen, fri for jorden på nivellerede bærere (300 mm), de skal opbevares på en plan overflade såsom et betongulv. Produkter skal opbevares på en måde, der forhindrer bøjning og tillader fri luftcirkulation.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="23">
                    Hvor stærke er Green Plank kompositter?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="23">
                    <p>
                      Green Plank kompositprodukter er designet og konstrueret til at imødekomme de hårdeste krav. Kontakt vores team, hvis du har en unik applikation, og vi vil rådgive om egnetheden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="24">
                    Hvordan vil saltvand påvirke kompositprodukter af Green Plank-træplast?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="24">
                    <p>
                      Saltvandsklimaer er en perfekt applikation til kompositprodukter af Green Plank-træplast. Saltvand vil ikke have nogen dårlige virkninger på kompositprodukter af Green Plank-træplast.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="25">
                    Jeg kan se, at begge sider af dækpladen kan bruges, er det så?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="25">
                    <p>
                      Ja, de fleste af Green Plank® kompositplankeprofiler har smukke designs på begge sider, hvilket giver dig valgfrihed. Green Plank kompositdæk tilbyder en skridsikker, varm, barfodsvenlig overflade, fri for farlige negleprikker eller splinter.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="26">
                    Er kompositdæk dyrere end trædæk?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="26">
                    <p>
                      De oprindelige omkostninger ved et sammensat dæk har tendens til at være mere. Skønt kompositdæk kræver mindre vedligeholdelse over dækkets fulde levetid, gør det dem mere omkostningseffektive over tid. I modsætning til kompositdæk har omkostningerne til konstruktion af et naturligt trædæk tendens til at være billigere. Selvom trædæk kræver en større vedligeholdelsesrutine for at sikre dækkets fulde levetid. Trædæk er mindre omkostningseffektive over tid på grund af vedligeholdelse.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="27">
                    Er sammensat terrassebord børnevenligt?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="27">
                    <p>
                      Ja. Vores sammensatte terrassebord har fremragende skridsikre egenskaber, og alle befæstelser er skjult, hvilket gør vores plader barn- og bare fodvenlige.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="28">
                    Er Green Plank kompositplanker glatte, når de er våde?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="28">
                    <p>
                      Green Plank kompositplanker har vist sig at give en god skridsikker overflade, når den er våd og tør. Takket være den bearbejdede teksturelle og børstede overflade er Green Plank dækplader skridsikre.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="29">
                    Skal jeg købe alt mit pyntemateriale ad gangen?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="29">
                    <p>
                      Ja, vi anbefaler at købe alt påkrævet pyntemateriale på én gang, fordi produktionskørsler kan producere lidt forskellige farver. Som de fleste kompositter vil individuelle Green Plank-planker variere i farve på grund af naturlige variationer i træfibre og polymerer. Vores garanti dækker ikke farvevariation; Derfor foreslår vi at købe ekstra materiale, hvis du har brug for at udskifte eller reparere brædder i fremtiden.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="30">
                    Hvad er fordelene ved Wood Composite Decking sammenlignet med traditionel trædæk?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="30">
                    <p>
                      Takket være de mange gode egenskaber beriger Wood Plastic Composites eller WPC din terrasse eller stier i meget lang tid. Det smukke, jævne udseende, som er meget vedligeholdelsesfattigt, gør det specielt. Du kan endda glemme at skulle male det. Føl komforten med vores WPC-produkter: • bare-fod-venlig og splinterfri • permanent smuk med elegant naturligt træudseende • glat, selv når det er vådt.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="31">
                    Hvilke farver kommer kompositprodukter af Green Plank træ i?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="31">
                    <p>
                      Der findes forskellige farver. Der henvises til hvert produktsortiment for de tilgængelige farver. Særlige farver kan købes, hvis den krævede mængde overstiger et bestemt beløb: Kontakt os for yderligere information.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="32">
                    Hvad hvis jeg ikke ved nøjagtigt, hvilket produkt der passer til mine behov?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="32">
                    <p>
                      Det bedste er at kontakte os direkte, enten via e-mail eller ringe til os i vores åbningstid. En af vores salgsrepræsentanter hjælper dig med at finde ud af, hvilke produkter der bedst passer til dine beho
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="33">
                    Hvad er Composite Decking?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="33">
                    <p>
                      Green Plank træ-plast komposit / naturlige fibre komposit terrassebord, beklædning, hegn og gelændere er lavet af et materiale, der er en blanding af naturlige fibre (træ, risskal), plast og en eller anden form for giftigt frit bindemiddel. Disse ingredienser sættes sammen for at danne et materiale, der er tættere, stærkere og tungere end træ alene, en træplastkomposit.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="34">
                    Hvad er Green Plank kompositter lavet af?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="34">
                    <p>
                      Vores sammensatte produkter er fri for formaldehyd og er helt giftfri. De kombinerer de bedste træk ved træ og polyethylenplast, hvilket gør det til et ideelt valg til udendørs brug.

                      Green Plank kompositprodukter er lavet af en homogen kombination af naturlige materialer - træ og plastfibre. En speciel kombination af 63% genvundet hårdt træ, næsten 27% genanvendt plast og 10% additiver såsom stabiliserende harpikser, pigmenter osv. Intet giftigt element! I alt indeholder Green Plank kompositter 90% genbrugsmaterialer, hvilket sparer miljøet.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="35">
                    Hvad er fordelene ved NOVOFENCE ™ sammensat hegn frem for traditionel træhegn?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="35">
                    <p>
                      Traditionelle træhegn holder, men vil aldre hurtigt, inden for få år har traditionel træhegn tendens til at vise tegn på slid og ældning. Dette er især velegnet til Norden, hvor regelmæssigt vådt vejr kan forårsage skader på træ, der er efterladt udenfor. Dette kan afhjælpes ved hjælp af forseglingsbehandlinger og regelmæssig vedligeholdelse, men det er tidskrævende og kan være dyrt. Vores sammensatte hegn har 25 års garanti, så du kan slappe af med den viden, at din sammensatte hegn er lavet til at holde og nyde.

                      En af de største faktorer i valget af NOVOFENCE ™ sammensat hegn vs. træ er budgettet. Da træhegn er oprindeligt billigere end sammensatte træhegn.

                      Træhegn, skal du vedligeholde og endda reparere eller udskifte områder af træet, der er rådnet. Du er nødt til at plette og male træet i en finish, der kan modstå elementerne. I de fleste klimaer skal du gøre dette årligt for at bevare hegnet, men i barske nordiske klimaer skal det gøres oftere. Green Plank composite hegn består af alle fordelene ved hegn og ingen af ​​ulemperne ved træhegn, som det er miljøvenligt, splinterfrit, vil ikke rådne og holdbart.

                      Vedligeholdelse er den vigtigste indflydelsesfaktor i, hvorfor folk vælger Green Plank NOVOFENCE ™ sammensat hegn - du behøver ikke passe på det bortset fra lejlighedsvis slange ned!

                      Green Plank NOVOFENCE ™ sammensat hegn påvirkes ikke af insektpopulationer, og det er vejrbestandigt. Det meste af snavs fjernes let med en højeffektiv vaskemaskine eller bare vand. Skimmelsvamp eller røgpletter kan simpelthen fjernes med et rengøringsmiddel.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="36">
                  Hvad står WPC for?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="36">
                    <p>
                    WPC er en forkortelse for 'Wood Polymer Composite' og er et kombineret materiale, der er blevet brugt i mere end 30 år nu, især i områder uden for, og som er produceret og brugt i Nordamerika og Europa. Den er lavet af en kombination af naturlige fyldstoffer med plastik.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="37">
                  Hvilken type fastgørelsesanordninger skal bruges med Green Plank Composite Decking?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="37">
                    <p>
                    Kun godkendte HidLoc ™ skjulte dækfastgørelseselementer kan bruges med kompositplanker af Green Plank-træ.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="38">
                  Hvilket interval skal jeg bruge mellem bjælker / understøtninger?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="38">
                    <p>
                    Afhængigt af det valgte dækplade og anvendelsen af ​​applikationen anbefaler Green Plank et maksimalt interval på 250 mm - 600 mm mellem centre på dækinstallationer. Se vores installationsinstruktioner for korrekte figurer. Det samme som ved facadebeklædning, anbefaler vi at have batoner på 400 mm - 600 mm centre til en traditionel vandret eller lodret formation. Flere oplysninger findes i vores installationsmanualer.
                    </p>
                  </Accordion.Collapse>
                </Card>

              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
