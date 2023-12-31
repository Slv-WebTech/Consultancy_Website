import React from "react";

export default function Events() {
  return (
    <div className="relative overflow-hidden bg-white" id="events">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold capitalize tracking-tight text-gray-900 sm:text-6xl">"Capturing Joy in Every Moment."</h1>
            <p className="mt-4 text-xl text-gray-500">
              In Quizaro, we believe in cherishing every moment as a unique celebration of life. From the sunrise that paints the sky with vibrant hues to the
              quiet moments of reflection.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-54 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src={process.env.PUBLIC_URL + "/Images/Pic-1.jpg"} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-54 overflow-hidden rounded-lg">
                        <img src={process.env.PUBLIC_URL + "/Images/Pic-2.jpeg"} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={process.env.PUBLIC_URL + "/Images/Pic-3.jpeg"} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={process.env.PUBLIC_URL + "/Images/Pic-4.jpeg"} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={process.env.PUBLIC_URL + "/Images/Pic-5.jpeg"} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={process.env.PUBLIC_URL + "/Images/Pic-6.jpeg"} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={process.env.PUBLIC_URL + "/Images/Pic-7.jpg"} alt="" className="h-full w-full object-cover object-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
