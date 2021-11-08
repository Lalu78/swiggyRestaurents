import React, { useState } from "react";

function MidNavBar() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [serch, setSerch] = useState(true)
    const s=serch?'visible':'invisible'

  const showSideMenu = () => {
    isSideMenuOpen ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true);
    };

    const onSrol = () => {
        setSerch(false)
    }

  return (
    <>
      <div className=" lg:ml-0 md:ml-0 ml-5 z-50 flex w-full h-20  p-5 items-center  sticky top-0 bg-white ">
        <div className="left flex items-center ml-10 ">
          <h1 className="p-5 text-lg font-medium md:text-3xl lg:text-black md:font-medium lg:text-3xl lg:text-black lg:font-medium  hover:text-yellow-500">
            
            304 restaurants
          </h1>
        </div>
        <div className=" mid_items hidden lg:flex items-center ml-auto ">
          <div onScroll={onSrol} className={`  ${s} flex p-6 items-center hover:text-yellow-500 invisible  `}>
            <img
              className="w-4 max-h-4"
              src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
              alt="serch icon"
            />
            <h1 className="text-lg pl-4 font-medium ">Search </h1>
          </div>
          <div className="flex  flex-col p-4 items-center hover:text-yellow-500">
                      <h1 className="text-lg pl-4 relative  ">Relevance </h1>
                    

            <hr className="w-20 h-0.5 ml-5  bg-black" />
          </div>
          <div className="flex p-4 items-center hover:text-yellow-500">
            <h1 className="text-lg pl-4  ">Delivery Time </h1>
          </div>
          <div className="flex p-4 items-center hover:text-yellow-500">
            <h1 className="text-lg pl-4  ">Rating </h1>
          </div>
          <div className="flex p-4 items-center hover:text-yellow-500">
            <h1 className="text-lg pl-4  ">Cost: Low To High </h1>
          </div>
          <div className="flex p-4 items-center hover:text-yellow-500">
            <h1 className="text-lg pl-4  ">Cost: High To Low </h1>
          </div>

          <div className="flex p-4 items-center hover:text-yellow-500">
            <h1 className="text-lg p-4  font-medium">Filters </h1>

            <div className="h-8 w-8 border-2 border-yellow-500 rounded-full  flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="  last_item ml-auto ">
          <button
            onClick={() => showSideMenu()}
            className="lg:hidden lg:ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isSideMenuOpen ? sideMenu() : ""}
        </div>
      </div>
      <hr className="w-11/12 flex items-center ml-16 mr-5" />
    </>
  );
}

export default MidNavBar;

function sideMenu() {
  return (
      <div className=" lg:hidden fixed top-20  h-84 w-full left-0 bg-bronw z-40">
          <div className="flex flex-col w-full justify-between">
      <div className=" right flex flex-col items-center ">
        <div className="flex p-2 items-center hover:text-yellow-500  ">
          <img
            className="w-4 max-h-4"
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt="serch icon"
          />
          <h1 className="text-lg pl-4 font-medium ">Search </h1>
        </div>
        <div className="flex p-2 items-center hover:text-yellow-500">
          <h1 className="text-lg pl-4  ">Relevance </h1>
        </div>
        <div className="flex p-2 items-center hover:text-yellow-500">
          <h1 className="text-lg pl-4  ">Delivery Time </h1>
        </div>
        <div className="flex p-2 items-center hover:text-yellow-500">
          <h1 className="text-lg pl-4  ">Rating </h1>
        </div>
        <div className="flex p-2 items-center hover:text-yellow-500">
          <h1 className="text-lg pl-4  ">Cost: Low To High </h1>
        </div>
        <div className="flex p-2 items-center hover:text-yellow-500">
          <h1 className="text-lg pl-4  ">Cost: High To Low </h1>
        </div>

        <div className="flex p-2 items-center hover:text-yellow-500">
          <h1 className="text-lg p-4  font-medium">Filters </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
              </div>
              </div>
    </div>
  );
}
