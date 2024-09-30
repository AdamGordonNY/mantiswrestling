import { Suspense } from "react";
import VideoComponent from "./VideoComponent";
import { programs } from "@/lib/data";

const HeroSection = () => {
  return (
    <>
      <div className="z-0 flex">
        {programs.map((program) => (
          <h1
            className="z-1 text-center text-mintdark-500 mx-2 my-2"
            key={program}
          >
            {program === "|" ? <span className="mx-2">|</span> : program}
          </h1>
        ))}
      </div>
      <div className="relative  flex justify-center items-center text-center overflow-hidden">
        <div className=""></div>
        <div className="relative z-2">
          <span className="text-2xl">
            Bringing competent wrestling programs to Wrestling/Jiu Jitsu/Martial
            Arts gyms in Colorado
          </span>
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
