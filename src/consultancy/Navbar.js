import React from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white shadow-lg") + " flex flex-wrap items-center justify-between px-2 py-3 "
      }
      id="Home"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              "animate__animated animate__heartBeat  text-sm font-bold leading-relaxed inline-block mr-4 py-12 whitespace-nowrap uppercase"
            }
            href="/home"
          >
            <img src={process.env.PUBLIC_URL + "/Images/QBCS.png"} width={190} className={"invert"} alt="Quizaro" />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className={(props.transparent ? "text-white" : "text-gray-800") + " fas fa-bars"}></i>
          </button>
        </div>
        <div
          className={"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden")}
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i className={(props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-facebook fa-2xl  text-xl leading-lg "} />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.linkedin.com/company/quizaro-extendededge/"
              >
                <i className={(props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-linkedin fa-2xl text-xl leading-lg "} />
                <span className="lg:hidden inline-block ml-2">Linkedin</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.instagram.com/quizaroextendededge/?hl=en"
              >
                <i className={(props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-instagram fa-2xl text-xl leading-lg "} />
                <span className="lg:hidden inline-block ml-2">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
