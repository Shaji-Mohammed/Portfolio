import React from "react";
import HTML from "../assets/html.png";
import Bootstrap from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Github from "../assets/github.png";
import Java from "../assets/java.png";
import R from "../assets/R.png";
import SQL from "../assets/mysql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // These are some of the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p>Java</p>
          </div>
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="ReactImg icon" />
            <p>React</p>
          </div>
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={R} alt="R icon" />
            <p>R</p>
          </div>
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="CSS icon" />
            <p>Bootstrap</p>
          </div>
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p>Github</p>
          </div>
          <div className="shadow-md rounded shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SQL} alt="SQL icon" />
            <p>MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
