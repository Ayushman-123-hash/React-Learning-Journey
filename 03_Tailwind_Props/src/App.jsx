import { useState } from 'react'
import Card from './Components/card'

function App() {

  // let obj = {
  //   name: "Ayushman",
  //   age: 20,
  //   city: "Delhi"
  // }

  // let arr = [1,2,3,4,5]

  return (
    <>
      <div className="bg-blue-500 text-red-500">Tailwind Test</div>
      <Card username="Ayushman" price="20$" hash="#345" imge="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif" />
      <Card username="John" price="30$" hash="#678" imge="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g" />
    </>
  )
}
export default App
