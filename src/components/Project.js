import React from "react";
import ProjectCarousel from "./ProjectCarousel";

export default function Project() {
  return (
    <div className="mb-[6rem]">
      <div>
        <p className="text-4xl font-bold text-center my-[50px]">Projects</p>
      </div>
      <div>
        <div>
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
}
