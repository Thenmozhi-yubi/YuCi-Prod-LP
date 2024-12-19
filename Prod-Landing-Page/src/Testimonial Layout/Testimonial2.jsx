import React, { useState } from "react";

const Testimonial2 = ({ testimonialConfig: initialConfig = {} }) => {
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
    ],
  };

  // Merge the initial config with the default config
  const [testimonialConfig] = useState({
    ...defaultConfig,
    ...initialConfig,
  });

  return (
    <div className="min-h-screen  px-4">
      {/* Header Section */}
      {/* <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold tracking-wide mb-6">
          {testimonialConfig.heading?.spann}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
          {testimonialConfig.heading?.title}
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {testimonialConfig.heading?.subtitle}
        </p>
      </div> */}

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {testimonialConfig.testimonials?.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md border border-slate-100 p-8 transition-all duration-300 hover:shadow-xl"
          >
             <div>
                    <img src="https://media.licdn.com/dms/image/v2/D4D0BAQEt4HK6B5ewww/company-logo_200_200/company-logo_200_200/0/1710832365066/go_yubi_logo?e=2147483647&v=beta&t=ksWMGcFFSbz8XOwtp7fWT3KfhbS2n7m4zzDNx5t_UZ4" alt="" className="w-10 h-10 mb-7" />
                </div>
            {/* Testimonial Description */}
            <p className="text-content text-lg leading-relaxed mb-8">
              "{testimonial.description}"
            </p>

            {/* User Info */}
            <div className="flex items-center">
               
              <div className="w-16 h-16 rounded-full border-2 border-blue-100 overflow-hidden mr-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-heading font-semibold text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial2;
