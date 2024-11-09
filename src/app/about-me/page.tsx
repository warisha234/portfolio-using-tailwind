import Image from "next/image";
import Aboutme from "../public/maiiiin.webp";

export default function About() {
  return (
    <div>
      <section
        id="aboutme"
        className="bg-gradient-to-r from-purple-900 to-pink-400 py-16 px-6 text-center overflow-hidden"
      >
        <h2 className="text-4xl font-semibold text-purple-800 mb-8">About Me</h2>
        <div className="flex items-center justify-center gap-8 flex-wrap max-w-screen-xl mx-auto">
          <div className="relative flex justify-center items-center w-72 h-72 rounded-full overflow-hidden shadow-xl animate-slideInLeft">
            <Image
              src={Aboutme}
              alt="aboutme"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="max-w-2xl text-left text-gray-300 animate-slideInUp delay-500">
            <p className="mb-4">
              Hello! I&apos;m Warisha, a passionate web developer with a love
              for creating stunning, user-friendly websites. I have a strong
              background in front-end and back-end development and thrive on
              solving complex problems through code.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              destinations, as traveling is my way of gaining inspiration and
              experiencing different cultures. Each journey enriches my
              perspective, which I bring back into my work, making my designs
              more diverse and globally appealing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
