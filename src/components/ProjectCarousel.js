import React from "react";
import { portfolioProjects } from "@/utils/constants.js";
import Image from "next/image";
import Description from "./Description";

const ProjectCarousel = () => {
  return (
    <div className="grid place-items-center grid-cols-2 w-full max-w-5xl shadow-2xl mx-auto">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500">
        {portfolioProjects.map((pic, idx) => (
          <div key={idx}>
            <Image
              src={pic.image}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover "
            ></Image>
          </div>
        ))}
        <Description />
      </div>
    </div>
  );
};

export default ProjectCarousel;
