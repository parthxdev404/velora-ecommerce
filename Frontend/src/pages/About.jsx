import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="flex items-center justify-around mt-10 p-8 ">
      <img className="h-130" src={aboutImg} alt="aboutImg" />
      <section>
        <p className="text-7xl ">
          Not just a store <br />a space for style <br />
          that feels <br />
          effortless and <br />
          confident.
        </p>
        <p className="text-md mt-3 font-medium">
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
