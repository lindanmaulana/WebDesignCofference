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
  const ourProgramRef = useRef(null)
  const registerRef = useRef(null)
  const venueRef = useRef(null)
  const sponsorsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <Fragment>
      <header>
        <Header herobannerRef={herobannerRef} overviewRef={overviewRef} speakers={speakers} ourProgramRef={ourProgramRef} registerRef={registerRef} venueRef={venueRef} sponsorsRef={sponsorsRef} contactRef={contactRef} />
      </header>

      <main>
        <HeroBanner ref={herobannerRef} />
        <Overview linkRef={overviewRef} />
        <EventHighlights />
        <VideoHighLights/>
        <Speakers ref={speakers} />
        <OurProgram ref={ourProgramRef} />
        <RegisterHere ref={registerRef} />
        <Questions />
        <EventVenue ref={venueRef} />
        <OurSponsor ref={sponsorsRef} />
        <EventContact ref={contactRef} />
      </main>

      <footer className="py-[100px]">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LandingPage;
