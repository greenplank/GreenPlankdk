import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

const HittaTextSection = () => {
    return (
        <section className=" text-center pt-120 pb-120">


            <Container>
                <div className="text-center block-title" >
                    <h5>Find en Green Plank-forhandler af naturlige fibre til sammensatte produkter, der er nærmest dig. Lær, hvor du kan købe Green Plank pyntede, hegn, beklædningsmaterialer og de forsyninger, du har brug for for at gennemføre dit nye projekt.</h5>
                </div>
                <div>
                <iframe src="https://storage.googleapis.com/greenplankdata1/index.html" width="100%" height="600px" scrolling="no" frameborder="no" allowtransparency="true"></iframe>
                </div>
            </Container>
        </section>
    );
};

export default HittaTextSection;
