import React, { useState } from "react";
import { Mail, CircleUser, Instagram, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    description: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !formData.message) {
      setError("Email and message are required!");
      setSuccess("");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address!");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("✅ Your message has been sent!");
    console.log("Form submitted:", formData);

    setFormData({ email: "", description: "", message: "" });
  };

  const contacts = [
    {
      icon: <Mail className="size-6 text-cyan-600" aria-label="Email" />,
      text: "patricknambajimana6@gmail.com",
    },
    {
      icon: <CircleUser className="size-6 text-cyan-600" aria-label="Phone" />,
      text: "+250781138331",
    },
    {
      icon: (
        <Instagram className="size-6 text-cyan-600" aria-label="Instagram" />
      ),
      text: "instagram.com/patrick",
    },
    {
      icon: <Github className="size-6 text-cyan-600" aria-label="Github" />,
      text: "github.com/patrick",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-center text-5xl capitalize mb-12 font-extrabold text-cyan-600">
        Get in Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="shadow-lg rounded-xl p-6 w-full max-w-md bg-cyan-200/20 text-lg">
          <p className="text-gray-700 mb-6">
            I’d love to hear from you! Whether you have a question, a project
            idea, or just want to say hi, feel free to get in touch.
          </p>
          <div className="space-y-4">
            {contacts.map((c, index) => (
              <div key={index} className="flex items-center gap-3">
                {c.icon}
                <span className="text-gray-800">{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-lg rounded-xl p-8 w-full max-w-md bg-cyan-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}
            {success && (
              <p className="text-green-600 text-sm font-medium">{success}</p>
            )}

            <div className="flex flex-col text-gray-700">
              <label htmlFor="email" className="text-lg mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-cyan-600 rounded p-2 focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div className="flex flex-col text-gray-700">
              <label htmlFor="description" className="text-lg mb-1">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Short description"
                className="border border-cyan-600 rounded p-2 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col text-gray-700">
              <label htmlFor="message" className="text-lg mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message..."
                rows={4}
                className="border border-cyan-600 rounded p-2 focus:outline-none"
                required></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 text-lg font-semibold text-white rounded bg-cyan-600 hover:bg-cyan-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
