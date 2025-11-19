import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import ColorfulTyping from './ColorfulTyping'; // dynamic typing effect

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 min-h-screen flex items-center bg-black overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 opacity-40 rounded-full blur-3xl animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute bottom-1/4 right-1/5 w-60 h-60 bg-gradient-to-tr from-indigo-500 via-purple-400 to-pink-400 opacity-30 rounded-full blur-2xl animate-blob animation-delay-1000 z-0"></div>

      <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full max-w-7xl mx-auto z-10">
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 order-first md:order-last">
          <Tilt
            className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 border-4 border-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 rounded-full shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Zahid Ali"
              className="w-full h-full rounded-full object-cover shadow-[0_10px_40px_rgba(130,69,236,0.5)] transition-transform duration-500 hover:scale-105"
            />
          </Tilt>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0 max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight transition-all duration-500 hover:text-purple-400">
            Hi, I am
          </h1>

          {/* Zahid Ali Name: Black by default, gradient on hover */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text"
            style={{
              color: 'black',
              backgroundClip: 'initial',
              WebkitBackgroundClip: 'initial',
            }}
          >
            Zahid Ali
          </h2>

          {/* Dynamic Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-200 leading-snug">
            <span className="text-gray-400">I am a </span>
            <ColorfulTyping />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-6 leading-relaxed max-w-full">
            I am a full-stack web developer and <span className="font-semibold text-purple-400">Software Engineer</span> with experience building responsive websites and applications. 
            Skilled in <span className="text-cyan-400 font-medium">HTML, CSS, JavaScript, React.js, Node.js, MongoDB, MySQL, Java</span>.  
            I run <span className="font-semibold text-pink-400">ZAM LearningHub</span>, where I create tutorials and lead coding workshops.
          </p>

          <a
            href="https://drive.google.com/file/d/1hwTuJv6s-zXZa_iNvoFZWvKCb6zJDCkG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-pulse"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 400px) {
          .max-w-xl { max-width: 90vw; }
          .sm\\:text-4xl { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
