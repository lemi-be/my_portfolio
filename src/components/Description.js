import { portfolioProjects } from "@/utils/constants";
import Image from "next/image";

function Description({ Prev, Next, activeProject }) {
  return (
    <div className="grid place-items-start w-full  relative">
      {portfolioProjects.map((setNum, idx) => (
        <div
          key={idx}
          className={
            idx === activeProject ? `text-4xl font-bold absolute ` : `hidden`
          }
        >
          {setNum.id + "."}
        </div>
      ))}

      <div className="">
        {portfolioProjects.map((desc, idx) => (
          <div
            key={idx}
            className={
              idx === activeProject
                ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out `
                : `hidden`
            }
          >
            <div className="py-16 text-5xl font-extrabold">{desc.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {desc.description}
            </div>
            <button className="w-[9rem] h-[3rem] bg-purple-900 font-bold text-white mt-[1rem]">
              View Project
            </button>
            <div className=" py-2 absolute bottom-1 right-5 flex justify-center items-center gap-4 w-[110px] ">
              <div
                onClick={Prev}
                className="absolute bottom-2 right-10 cursor-pointer"
              >
                <Image
                  className="bg-purple-900 rounded-full "
                  src=".//left.svg"
                  width={20}
                  height={20}
                  alt=""
                ></Image>
              </div>
              <div
                onClick={Next}
                className="absolute bottom-2 right-1 cursor-pointer"
              >
                <Image
                  className="bg-purple-900 rounded-full "
                  src=".//right.svg"
                  width={20}
                  height={20}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Description;
