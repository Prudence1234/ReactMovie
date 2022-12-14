// import { useDispatch } from 'react-redux';
// import {addToList} from '../redux/listSlice';
// import { addToList } from './Mylist';

// const dispatch = useDispatch();

// <button 
//   onClick={() => 
//     dispatch(addToList({
//       _id, poster 
//     }))
//   }>
// </button>


// export default dispatch
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './Mylist'

// export function Mylist() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//         Add to Mylist
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Remove from Mylist
//         </button>
//       </div>
//     </div>
//   )
// }
 import React from 'react'
 import { useSelector , useDispatch } from 'react-redux'
 
 const Mylist = () => {
   const CartMovies = useSelector((state) => state.list_movies.value)
   const names = CartMovies.map((data, index) => {
  return (<div key={data._id}>
    <h3>{data.title}</h3>
    <span>{data.rated}</span>
    </div>)
  })
   return (
     <div>   
     CART:
     {names}
     </div>
   )
 }
 
 export default Mylist