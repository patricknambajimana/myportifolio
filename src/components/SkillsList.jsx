import React from "react";
import { Code, Braces, Blocks, Palette } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code, level: 80 },
  { name: "React", icon: Braces, level: 75 },
  { name: "TypeScript", icon: Blocks, level: 60 },
  { name: "Tailwind CSS", icon: Palette, level: 70 },
];

const SkillsList = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Frontend Skills
      </h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <skill.icon className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="ml-auto text-sm text-gray-600 font-medium">
                {skill.level}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-cyan-500 to-cyan-900 rounded-full transition-all duration-400 ease-out w-0 group-hover:w-[var(--w)]"
                style={{ "--w": `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
