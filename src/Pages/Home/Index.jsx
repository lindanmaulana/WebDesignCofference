import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
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
  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <main>
        <HeroBanner />
        <Overview />
        <EventHighlights />
        <VideoHighLights />
        <Speakers />
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
