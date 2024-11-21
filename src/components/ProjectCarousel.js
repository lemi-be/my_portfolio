"use client";
import React, { useEffect, useState } from "react";
import { portfolioProjects } from "@/utils/constants.js";
import Image from "next/image";
import Description from "./Description";

const ProjectCarousel = () => {
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    activeProject === portfolioProjects.length - 1
      ? setActiveProject(0)
      : setActiveProject(activeProject + 1);
  };
  const prevProject = () => {
    activeProject === 0
      ? setActiveProject(portfolioProjects.length -1)
      : setActiveProject(activeProject - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextProject();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full max-w-5xl shadow-2xl mx-auto gap-5">
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 p-6 md:p-0`}
      >
        {portfolioProjects.map((pic, idx) => (
          <div
            className={
              idx === activeProject
                ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out`
                : "hidden"
            }
            key={idx}
          >
            <Image
              src={pic.image}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover "
            ></Image>
          </div>
        ))}
      </div>
      <div>
        <Description
          activeProject={activeProject}
          Next={nextProject}
          Prev={prevProject}
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
