import Image from "next/image";
import Profileimage from "./public/maiiiin.webp";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 to-pink-400 p-6">
      <div className="profile-info flex flex-col md:flex-row items-center justify-between mt-5 p-4">
        <div className="info-text flex flex-col text-center md:text-left md:mr-auto">
          <h1 className="name text-5xl font-bold text-purple-900 leading-none">
            <span className="text-shadow-md">Warisha Turab</span>
          </h1>
          <h4 className="title text-3xl text-pink-400 mt-4">
            <span>A passionate creator of</span>
          </h4>
          <p className="heading relative text-4xl font-bold text-pink-300 mt-4 overflow-hidden h-10 space-y-2">
            <span className="dynamic-title block text-pink-400 absolute animate-slide">Web Developer</span>
          </p>
        </div>
        <div className="image-content flex justify-center items-center mt-12 md:mt-0">
          <Image
            src={Profileimage}
            alt="Profile"
            className="profile-image rounded-lg shadow-lg w-80 h-auto transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
