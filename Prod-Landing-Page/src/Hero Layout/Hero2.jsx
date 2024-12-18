import React, { useState, useEffect } from "react";
import BackgroundSVG from '../assets/Mask group.svg';

const Hero2 = (
    {
        title,
        subtitle,
        bgImage,
        buttonText,
      }
) => {
    const [storedHeroConfig, setStoredHeroConfig] = useState(null);

    useEffect(() => {
      const savedHeroConfig = JSON.parse(localStorage.getItem("heroConfig"));
      if (savedHeroConfig) {
        setStoredHeroConfig(savedHeroConfig);
      } else {
        setStoredHeroConfig({
          title,
          subtitle,
          bgImage,
          buttonText,
        });
      }
    }, [title, subtitle, bgImage, buttonText]);
  return (
    <div className="flex flex-wrap items-center justify-between py-16  ">    
        {/* second component */}
        <div className="w-full">
        <div className="relative flex flex-col md:flex-row items-center h-screen ">
 
 <div className="absolute inset-0 grid grid-cols-12 ">
 
 <div className="col-span-7  bg-cover bg-center bg-[#03142D]"
  style={{
    backgroundImage: `url(${BackgroundSVG})`,
    backgroundSize: "auto", 
    width: "100%",          
    height: "100%",         
  }}
  ></div>
   
   <div className="col-span-5 bg-[#5877A2]"></div>
 </div>

 {/* Content */}
 <div className="relative flex flex-col md:flex-row items-center w-full container mx-auto max-w-screen-xl">
   {/* Left Side */}
   <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 px-4 z-10">
     <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 font-sofia text-white">
       {storedHeroConfig?.title || title}
     </h1>
     <p className="text-sm sm:text-lg lg:text-base my-10 font-sofia text-gray-200">
       {storedHeroConfig?.subtitle || subtitle}
     </p>
   </div>

   {/* Right Side */}
   <div className="w-full md:w-1/2 px-4 z-10">
     <img
       src={storedHeroConfig?.bgImage || bgImage}
       alt="Hero"
       className="h-[484px] w-[484px] object-cover rounded-3xl border shadow-[0_0_80px_20px_rgba(0,0,0,1)]"
     />
   </div>
 </div>
</div>
        </div>
       

     
    </div>
  )
}

export default Hero2