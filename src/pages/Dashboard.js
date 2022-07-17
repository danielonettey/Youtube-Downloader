import { MenuIcon } from "@heroicons/react/solid";
import React from "react";

const Dashboard = () => {
    return (
        <div id="view" className="h-full w-screen flex flex-row">
            <button className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden">
                <MenuIcon className="w-6" />
            </button>

            <div className="bg-white fixed md:block shadow-xl px-3 w-full overflow-x-hidden transition-transform duration-300 ease-in-out">
                <div className="space-y-6 md:space-y-10 mt-10">
                    <h1 className="font-bold text-4xl text-center md:hidden">
                        D<span className="text-teal-600">.</span>
                    </h1>
                    <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                        Dashwind<span className="text-teal-600">.</span>
                    </h1>
                    

                </div>
            </div>


            <div className="bg-white fixed h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out">
                <div className="space-y-6 md:space-y-10 mt-10">
                    <h1 className="font-bold text-4xl text-center md:hidden">
                        D<span className="text-teal-600">.</span>
                    </h1>
                    <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                        Dashwind<span className="text-teal-600">.</span>
                    </h1>
                    

                </div>
            </div>

            


            <div className="pl-30 md:pl-60 lg:pl-60 w-full h-[900px] bg-primary">
                ow okay then this is really cool asdn sa nskdjn sakjdn ksajndk asjndk jsand ksjndk jsan d
            </div>
        </div>
    );
};

export default Dashboard;
