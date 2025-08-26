import React from "react";
import { ReactLogo, TypeScript, GitHub } from "lucide-react";

const skills = [
  { name: "React", icon: <ReactLogo className="text-cyan-600 w-8 h-8" /> },
  {
    name: "TypeScript",
    icon: <TypeScript className="text-blue-600 w-8 h-8" />,
  },
  {
    name: "Tailwind CSS",
    icon: <div className="text-teal-500 font-bold text-2xl">TW</div>,
  },
  { name: "Context API", icon: <GitHub className="text-gray-800 w-8 h-8" /> },
  {
    name: "REST APIs",
    icon: <div className="text-cyan-500 font-bold text-2xl">API</div>,
  },
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-20 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-600 mb-10 text-center">
        My Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl hover:scale-105 transform transition">
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
