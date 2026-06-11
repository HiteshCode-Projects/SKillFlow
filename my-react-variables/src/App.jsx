import React from "react";

// function App(){
// let count = 0

// function add(){
//   count = count + 1
//   console.log(count)
// }

// //Js code Above the return

// return(
//   <div>
//           <h2>The Count Value is {count}  </h2>
//           <button onClick={add}>Increase</button>
//   </div>
// )

// }
// export default App


//useState - hook It is Special React Variables That Stores  The updated Value and Updates The Screen as well

//synatx - const [variableNAme , setVaribaleName] = useState(Intial Value)

// import { useState } from "react";

// function App(){

//   const [likes , setLikes] = useState(12)

// function IncreaseLikeCount(){
//        setLikes(likes + 1)
//        console.log(likes)
// }

//   return(
//     <div>
//              <h2>Likes : {likes}</h2>
//              <button onClick={IncreaseLikeCount}>💖Like</button>
//     </div>
//   )

// }
// export default App


//Example 3

 //import { useState } from "react";

// function App(){

//   const [show , setShow] = useState(false)



// return(
//   <div>
//     <input type={show ?  "text" : "password"}   placeholder="Enter Your Password"        />
//     <button onClick={  ()=>  setShow(!show)  }>Show/Hide</button>
//   </div>
// )

// }

// export default App



//Instagram - Follow Button / Following Button
// hint <button> {   ?  "Follow" : "Following"}       </button>

import { useState } from "react";
function App(){
const[follow,setFollow]=useState(false)
  return(
    <div>
      <button onClick={()=>setFollow(!follow)}>{follow?"Following":"Follow"}</button>
    </div>
  )
}
export default App