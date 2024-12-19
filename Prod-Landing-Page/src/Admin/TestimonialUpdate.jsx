import React, { useState } from "react";
import Testimonial1 from "../Testimonial Layout/Testimonial1";

const TestimonialUpdate = () => {
  const initialConfig = {
    heading: {
      spann: "Our Happy Clients",
      title: "What They Say About Us",
      subtitle: "See what our satisfied clients have to say about their experience with our team.",
    },
    testimonials: [
      {
        name: "Sarah Johnson",
        designation: "Chief Marketing Officer",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&w=256&h=256&fit=crop",
        description:
          "Working with this team has been an absolute game-changer for our business.",
      },
      {
        name: "David Lee",
        designation: "Founder & CEO",
        image:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&w=256&h=256&fit=crop",
        description:
          "The team’s professionalism and creative expertise are unmatched.",
      },
    ],
    button: {
      text: "Read More Testimonials",
      link: "/testimonials",
    },
  };

  const [testimonialConfig, setTestimonialConfig] = useState(initialConfig);

  const handleInputChange = (section, key, value) => {
    setTestimonialConfig((prevConfig) => ({
      ...prevConfig,
      [section]: { ...prevConfig[section], [key]: value },
    }));
  };

  const handleTestimonialChange = (index, key, value) => {
    const updatedTestimonials = [...testimonialConfig.testimonials];
    updatedTestimonials[index][key] = value;
    setTestimonialConfig((prevConfig) => ({
      ...prevConfig,
      testimonials: updatedTestimonials,
    }));
  };

  const addTestimonial = () => {
    setTestimonialConfig((prevConfig) => ({
      ...prevConfig,
      testimonials: [
        ...prevConfig.testimonials,
        { name: "", designation: "", image: "", description: "" },
      ],
    }));
  };

  const deleteTestimonial = (index) => {
    setTestimonialConfig((prevConfig) => ({
      ...prevConfig,
      testimonials: prevConfig.testimonials.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-row w-full">
      {/* Left Column - Editing */}
      <div className="w-1/3 p-5 bg-gray-100 border-r">
        <h2 className="text-xl font-bold mb-4">Edit Testimonial</h2>

        {/* Heading Section */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Heading</h3>
          <input
            type="text"
            placeholder="Spann"
            className="w-full mb-2 p-2 border rounded"
            value={testimonialConfig.heading.spann}
            onChange={(e) => handleInputChange("heading", "spann", e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            className="w-full mb-2 p-2 border rounded"
            value={testimonialConfig.heading.title}
            onChange={(e) => handleInputChange("heading", "title", e.target.value)}
          />
          <textarea
            placeholder="Subtitle"
            className="w-full p-2 border rounded"
            value={testimonialConfig.heading.subtitle}
            onChange={(e) =>
              handleInputChange("heading", "subtitle", e.target.value)
            }
          />
        </div>

        {/* Testimonial Section */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Testimonials</h3>
          {testimonialConfig.testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4 border p-3 rounded">
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-2 p-2 border rounded"
                value={testimonial.name}
                onChange={(e) =>
                  handleTestimonialChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Designation"
                className="w-full mb-2 p-2 border rounded"
                value={testimonial.designation}
                onChange={(e) =>
                  handleTestimonialChange(index, "designation", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Image URL"
                className="w-full mb-2 p-2 border rounded"
                value={testimonial.image}
                onChange={(e) =>
                  handleTestimonialChange(index, "image", e.target.value)
                }
              />
              <textarea
                placeholder="Description"
                className="w-full mb-2 p-2 border rounded"
                value={testimonial.description}
                onChange={(e) =>
                  handleTestimonialChange(index, "description", e.target.value)
                }
              />
              <button
                onClick={() => deleteTestimonial(index)}
                className="bg-red-500 text-white px-3 py-1 rounded mt-2"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={addTestimonial}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Add Testimonial
          </button>
        </div>

        {/* Button Section */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Button</h3>
          <input
            type="text"
            placeholder="Button Text"
            className="w-full mb-2 p-2 border rounded"
            value={testimonialConfig.button.text}
            onChange={(e) => handleInputChange("button", "text", e.target.value)}
          />
          <input
            type="text"
            placeholder="Button Link"
            className="w-full p-2 border rounded"
            value={testimonialConfig.button.link}
            onChange={(e) => handleInputChange("button", "link", e.target.value)}
          />
        </div>
      </div>

      {/* Right Column - Preview */}
      <div className="w-2/3 p-5 bg-white">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <Testimonial1 testimonialConfig={testimonialConfig} />
      </div>
    </div>
  );
};

export default TestimonialUpdate;
