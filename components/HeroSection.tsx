import { Suspense } from "react";
import VideoComponent from "./VideoComponent";
import MantisLogo from "./MantisLogo";

const HeroSection = () => {
  return (
    <>
      <h1 className="heading-1-regular --font-oswald mt-12 text-mint-500">
        Mantis Sports
      </h1>{" "}
      <MantisLogo />
      <h2 className="z-0">Mixed Martial Arts | Jiu Jitsu | Wrestling</h2>
      <div className="relative  flex justify-center items-center text-center overflow-hidden">
        <div className=""></div>
        <div className="relative z-2">
          <h1>
            Bringing competent wrestling programs to Wrestling/Jiu Jitsu/Martial
            Arts gyms in Colorado
          </h1>
          <div className="uppercase py-[10px] px-5">
            {" "}
            <section className="mq450:hidden">
              <Suspense fallback={<p>Loading video...</p>}>
                <VideoComponent />
              </Suspense>
              {/* Other content of the page */}
            </section>
            <button>Join Now</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
