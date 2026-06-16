import React, { useEffect, useState } from "react";
import github from "../../assets/github.png";
import git from "../../assets/git.svg";
import hub from "../../assets/hub.png";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()

// {simple way to fetch Api pf using useSatte , useEffect}

//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://api.github.com/users/Ayushman-123-hash")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
     
   

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

         
          <div className="w-full lg:w-5/12 flex justify-center">
            <img src={github} alt="Github Banner" className="w-full max-w-md rounded-2xl shadow-2xl object-cover hover:scale-105 transition duration-500" />
          </div>
          

         
          <div className="w-full md:w-7/12 bg-linear-to-br from-white via-slate-100 to-gray-200 rounded-3xl shadow-2xl border border-gray-200 p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-orange-300/40">

            
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-gray-900 flex justify-center items-center gap-3">
                GitHub
                <span className="text-orange-500">Profile</span>
                <img src={git} className="w-10 h-10" alt="" />
              </h1>

              <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mt-4"></div>
            </div>

           
            <div className="space-y-5 text-lg text-gray-800">

              <p>
                <span className="font-bold text-orange-600">👤 Name :</span>{" "}
                {data.name}
              </p>

              <p>
                <span className="font-bold text-orange-600">📝 Bio :</span>{" "}
                {data.bio}
              </p>

              <p>
                <span className="font-bold text-orange-600">📍 Location :</span>{" "}
                {data.location}
              </p>

              <p>
                <span className="font-bold text-orange-600">💼 Status :</span>{" "}
                Open to Frontend Developer Internships
              </p>

              <p>
                <span className="font-bold text-orange-600">🌐 Portfolio :</span>{" "}
                <a
                  href={data.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Visit Portfolio
                </a>
              </p>

            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <h2 className="text-orange-600 text-3xl font-bold">
                  {data.followers}
                </h2>
                <p className="text-gray-600 mt-2">Followers</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <h2 className="text-orange-600 text-3xl font-bold">
                  {data.following}
                </h2>
                <p className="text-gray-600 mt-2">Following</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
                <h2 className="text-orange-600 text-3xl font-bold">
                  {data.public_repos}
                </h2>
                <p className="text-gray-600 mt-2">Repositories</p>
              </div>

            </div>

            {/* Button */}
            <div className="text-center mt-10">

              <a
                href={data.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                <img src={git} className="w-6" alt="" />
                Visit GitHub
              </a>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Github;

// {Optimize way to fetch API with useLoaderData & async await}

export const githubInfoLoader = async () => {
        const response = await fetch('https://api.github.com/users/Ayushman-123-hash')
        return response.json()
}