import React from "react";

export const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-20 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-600 mb-8 text-center">
        About Me
      </h1>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
        {/* Intro */}
        <p className="text-xl">
          I’m a{" "}
          <span className="font-semibold text-cyan-600">
            dedicated Front-End Developer
          </span>
          with a strong focus on creating modern, responsive, and
          high-performance web applications. I specialize in{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">TypeScript</span>, crafting solutions
          that are both user-friendly and business-focused.
        </p>

        {/* Core Strengths */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            What I Do Best
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Building{" "}
              <span className="font-medium">
                scalable and reusable UI components
              </span>
              that ensure consistency across applications.
            </li>
            <li>
              Writing{" "}
              <span className="font-medium">clean, maintainable code</span>
              that aligns with modern best practices.
            </li>
            <li>
              Creating <span className="font-medium">responsive designs</span>
              with Tailwind CSS for smooth user experiences across all devices.
            </li>
            <li>
              Managing state efficiently with{" "}
              <span className="font-medium">Context API</span>
              for predictable, maintainable workflows.
            </li>
            <li>
              Integrating <span className="font-medium">REST APIs</span>{" "}
              seamlessly to connect front-end with real-world data.
            </li>
          </ul>
        </div>

        {/* Philosophy */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-500 mb-3">
            My Philosophy
          </h2>
          <p>
            I believe that the best digital products are those that balance
            <span className="text-cyan-600 font-medium"> user experience </span>
            and{" "}
            <span className="text-cyan-600 font-medium">business goals</span>.
            My aim is to bring ideas to life with elegant design, clean
            architecture, and a focus on performance.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-cyan-700 transition">
            Let’s Work Together 🚀
          </a>
        </div>
      </div>
    </div>
  );
};
