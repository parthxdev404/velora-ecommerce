import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around mt-10 p-4 sm:p-6 lg:p-8 gap-8">
      <img
        className="h-80 sm:h-110 lg:h-130 object-cover"
        src={aboutImg}
        alt="aboutImg"
      />

      <section>
        <p className="text-3xl sm:text-5xl lg:text-7xl leading-tight">
          Not just a store <br />
          a space for style <br />
          that feels <br />
          effortless and <br />
          confident.
        </p>

        <p className="text-sm sm:text-md mt-3 font-medium leading-relaxed">
          Rooted in simplicity and driven by style , we create a <br />
          space where modern fashion meets everyday comfort. <br />
          Thoughtfully chosen pieces made <br />
          to elevate your wardrobe.
        </p>
      </section>
    </div>
  );
};

export default About;
