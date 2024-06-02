import Header from "./Header";
import Footer from "./Footer";
import { Fragment, useRef } from "react";
import HeroBanner from "./HeroBanner";
import Overview from "./Overview";
import Speakers from "./Speakers";
import EventHighlights from "./EventHighlights";
import VideoHighLights from "./VideoHighLights";
import OurProgram from "./OurProgram";
import RegisterHere from "./RegisterHere";
import Questions from "./Questions";
import EventVenue from "./EventVenue";
import OurSponsor from "./OurSponsor";
import EventContact from "./EventContact";

const LandingPage = () => {

  const herobannerRef = useRef(null)
  const overviewRef = useRef(null)
  const speakers = useRef(null)
  const videoHighLightsRef = useRef(null)

  return (
    <Fragment>
      <header>
        <Header herobannerRef={herobannerRef} overviewRef={overviewRef} speakers={speakers} videoHighLightsRef={videoHighLightsRef} />
      </header>

      <main>
        <HeroBanner ref={herobannerRef} />
        <Overview linkRef={overviewRef} />
        <EventHighlights />
        <VideoHighLights linkRef={videoHighLightsRef}/>
        <Speakers ref={speakers} />
        <OurProgram />
        <RegisterHere />
        <Questions />
        <EventVenue />
        <OurSponsor />
        <EventContact />
      </main>

      <footer className="py-[100px]">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LandingPage;
