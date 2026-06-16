import React from 'react'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import svg from "../../assets/svg.svg";
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 mx-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Transform Your Ideas Into Reality 
                            <br/>
                            <span className="text-lg font-medium text-gray-800">Build fast, responsive, and modern web applications using React.js.</span>
                            <span className="text-lg font-medium text-gray-800">Tailwind CSS, and the latest web technologies.</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 focus:outline-none"
                            to="/"
                        >
                            <img className='w-9 h-9 fill-white' src={svg} alt="" />
                            &nbsp; Start Building 
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-35 sm:pt-1 pt-12 h-full ">
                    <img className="w-130" src={img1} alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src={img2} alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-serif font-extrabold">Work With Us</h1>
        </div>
    );
}
