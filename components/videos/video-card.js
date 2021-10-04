import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/5-1-1024x273.webp";
import heart from "../../assets/images/shapes/192-by-192.png";

const VideoCard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card">
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="m20hG3KpQtI"
        onClose={() => setOpen(false)}
      /> */}
      <div
        className="video-card__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Container className=" text-center pt-60 pb-60">
        <h3>
          <img src={heart} width="15" alt="" />
          Hvorfor Green Plank?
        </h3>
        <h4 style={{color:"white"}}>
        Green Plank-mærket er et bæredygtigt byggeproduktmærke, der repræsenterer kvalitet, ekspertise og innovation i mere end 15 år. Green Plank står for innovation, pålidelighed, kvalitet, tillid og kompetence – det er grundlaget for vores forretning. Vi er drevet af en passion for bæredygtige byggeprodukter, og det afspejles i hvert af vores produkter. Som et paraplymærke inkluderer Green Plank en bred brandportefølje i de fire kategorier af terrasser, facadebeklædning, planker og hegn, herunder produktmærker som AVON Flooring. Vi er det ideelle valg til krævende applikationer såsom hotelplanker såvel som andre offentlige områder som parker, forfriskningsbarer, verandaer og klubhusplanker.
        </h4>
        <h5 style={{color:"white",marginTop:"1em"}}>Vores sammensatte planke er holdbar, barfodsvenlig og nem at vedligeholde i fremragende stand år efter år.</h5>
        <div className="video-card__btn-block">
          <Link href="/bestall-prov">
            <a className="thm-btn dynamic-radius">bestil prøve</a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
