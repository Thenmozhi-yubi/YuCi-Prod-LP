import React, { useState } from "react";
import { motion } from "framer-motion";

const Testimonial1 = ({ testimonialConfig: initialConfig = {} }) => {
  // Default configuration if no props are passed
  const defaultConfig = {
    heading: {
      spann: "Our Happy Clients",
      title: "What They Say About Us",
      subtitle:
        "See what our satisfied clients have to say about their experience with our team.",
    },
    testimonials: [
      {
        name: "Sarah Johnson",
        designation: "Chief Marketing Officer",
        image:
          "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
        description:
          "Working with this team has been an absolute game-changer for our business.",
      },
      {
        name: "David Lee",
        designation: "Founder & CEO",
        image:
          "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
        description:
          "The team’s professionalism and creative expertise are unmatched.",
      },
      {
        name: "David Lee",
        designation: "Founder & CEO",
        image:
          "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
        description:
          "The team’s professionalism and creative expertise are unmatched.",
      },
    ],
    button: {
      text: "Read More Testimonials",
      link: "/testimonials",
    },
  };

  // Merge the initial config with the default config
  const [testimonialConfig, setTestimonialConfig] = useState({
    ...defaultConfig,
    ...initialConfig,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24 px-4">
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-1 " />
    
    {/* Header Section */}
    <div className="max-w-4xl mx-auto text-center mb-20">
      <span className="inline-block px-6 py-2 rounded-lg bg-button-active text-white text-sm font-semibold tracking-wide mb-6">
        {testimonialConfig.heading?.spann}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
        {testimonialConfig.heading?.title}
      </h2>
      <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        {testimonialConfig.heading?.subtitle}
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 mb-20">
      {testimonialConfig.testimonials?.map((testimonial, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl shadow-md border border-slate-100"
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 right-8">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-6 flex items-center">
            <div className="w-16 h-16 rounded-full border-2 border-blue-100 overflow-hidden mr-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-heading font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-primary text-sm font-medium">{testimonial.designation}</p>
            </div>
          </div>

          {/* Testimonial Content */}
          <p className="text-content text-lg leading-relaxed mb-6">
            "{testimonial.description}"
          </p>

          {/* Rating Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    {/* {testimonialConfig.button?.text && (
      <div className="text-center">
        <a
          href={testimonialConfig.button.link}
          className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
        >
          {testimonialConfig.button.text}
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    )} */}
  </div>
  );
};

export default Testimonial1;
