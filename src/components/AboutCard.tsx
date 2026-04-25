import portrait from "../assets/cardPortrait.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

function AboutCard() {
  return (
    <div className=" rounded-lg border-2 border-gray-800 bg-gray-950 mx-10 py-2 px-5 flex flex-col justify-start items-center">
      <img
        className="mx-auto rounded-full border-6 border-red-600 w-48 h-48 object-cover mb-2"
        src={portrait}
        alt="Portrait"
      />
      <h3 className="text-xl font-bold mb-1">Reynaldo Carmenate Arias</h3>
      <h3 className="text-lg font-semibold text-red-600 mb-1">
        Frontend Developer
      </h3>
      <hr className="my-4 w-full h-1 border-0 dark:bg-gray-800" />
      <div className="flex justify-center gap-5 px-5 w-full">
        <a
          href="#projects"
          className="flex justify-center items-center bg-red-600 hover:bg-red-500  active:bg-red-600 hover:cursor-pointer hover:scale-105 active:scale-95 transition-all duration-100 p-4 rounded-lg w-35"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="flex justify-center items-center bg-gray-700 p-2 rounded-lg hover:cursor-pointer hover:bg-gray-600 hover:scale-105 active:scale-95 transition-all duration-100 active:bg-gray-700 w-35"
        >
          Contact me
        </a>
      </div>
      <hr className="my-4 w-full h-1 border-0 dark:bg-gray-800" />
      <div className="flex justify-center gap-4 mb-2">
        <a
          className="bg-gray-700 p-2 rounded hover:cursor-pointer hover:bg-gray-600 hover:scale-105 active:scale-95 transition-all duration-100"
          href="https://github.com/ReySlash"
        >
          <img className="w-8" src={githubIcon} alt="GitHub" />
        </a>
        <a
          className="bg-gray-700 p-2 rounded hover:cursor-pointer hover:bg-gray-600 hover:scale-105 active:scale-95 transition-all duration-100"
          href="https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/"
        >
          <img className="w-8" src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default AboutCard;
