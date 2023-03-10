import React from "react";
import { TypeAnimation } from "react-type-animation";


const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
        alt=''
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800"> I'm Marquan Bowman</h1>
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800"> Welcome To My Portfolio</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                1000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast",
                2000,
                "Student",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
