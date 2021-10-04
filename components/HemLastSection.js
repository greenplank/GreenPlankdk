import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import bgImage from "../assets/images/backgrounds/5-1-1024x273.webp";
import heart from "../assets/images/shapes/192-by-192.png";

const HemLastSection = () => {
    return (
        <section className=" text-center pt-10 pb-20">


            <Container>
                <div className="text-center block-title" >
                    <h3 className="block title" style={{ marginBottom: "1em" }}>
                        <img src={heart} width="15" alt="" />
                        Green Plank kompositplade sammenlignet med træ
                    </h3>
                    <h5>Når man sammenligner Komposit Terrassebrædder vs Wooden Terrassebrædder, er holdbarhed en af ​​de største forskelle. Siden 1980 er træplastkomposit, også kendt som WPC, træalternativer eller naturlige fibre-komposit (NFC) hurtigt blevet det hurtigst voksende pyntemateriale til privat brug og kommerciel brug. Mange husejere vælger træplanker, fordi det er velkendt, let tilgængeligt og overkommeligt. På samme tid forårsager træplankeproblemer som splinter, råd og høj vedligeholdelse mange hovedpine. Selvom komposit træplader er lettere at vedligeholde, er nogle husejere bekymrede for, at kompositter ikke ser så pæne ud som træ. Green Plank har dog udviklet kompositter, der efterligner det rige, naturlige udseende af træ uden besværet med at vedligeholde et trædæk. Green Plank kompositplanker er et miljøvenligt træalternativ, der kombinerer genbrugsplast og træ / ris skalfibre. Green Plank Komposit terrassebrædder er let tilgængelige på de fleste store bygningsforsyningsbutikker i hele Europa.</h5>
                </div>
            </Container>
        </section>
    );
};

export default HemLastSection;
