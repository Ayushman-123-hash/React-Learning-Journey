import React from 'react'

function Card({ username , price , hash , imge}){
    console.log(username , price , hash , imge)
  return (

    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img src={imge} alt={username} className="object-cover object-center rounded-t-xl"/>
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-center align-middle font-sm">
            <h1> {username}</h1>
          </div>
          <div className="flex  justify-between" gap-2 mb-20>
            <h3>price</h3>
            <p>{price}</p>
          </div>
          <div className="flex  justify-between">
            <p>{hash}</p>
            <p>0.01</p>
          </div>
        </div>
    </div>
  )
}

export default Card
