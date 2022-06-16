import React, { useEffect, useState } from 'react'

const ArrayTask = () => {
   const [num, setNum] = useState(0);

   const smallestNumber = (n) => {
      let arr1 = [30, 100, 300, 200, 1000, 10, 20];

      let arr2 = arr1.sort((a, b) => a - b).slice(0, n);

      setNum(Math.max(...arr2) - Math.min(...arr2))
   };

   useEffect(() => {
      smallestNumber(3)
   }, [])

   return (
      <div>{num}</div>
   )
}

export default ArrayTask