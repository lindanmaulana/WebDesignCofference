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
        <section className="bg-[url(/src/assets/img/bg/venue.jpg)] bg-center bg-cover">
          <div className="py-[70px]">
            <div className="container px-10">
              
            </div>
          </div>
        </section>
      </main>

      <footer className="py-[100px]">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LandingPage;
