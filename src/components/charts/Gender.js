// import "./styles.css";
import React, { useEffect, useState } from "react";

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJs.register(
   Tooltip, Title, ArcElement, Legend
);

const Gender = () => {
   const [data, setData] = useState({
      datasets: [{
         data: ['Female', 'Male'],
         backgroundColor: [
            'Red',
            'Blue'
         ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
         'Female',
         'Male'
      ]
   });

   const getUsers = async () => {
      try {
         const res = await fetch(`https://randomuser.me/api/?seed=dexi-interview&results=100`);
         const dataRes = await res.json();

         const data = [];
         let maleCount = 0;
         let femaleCount = 0;

         for (let i of dataRes.results) {
            if (i.gender === "male") {
               maleCount++
            }
            if (i.gender === "female") {
               femaleCount++
            }
         };

         data.push(maleCount, femaleCount);

         setData(
            {
               datasets: [{
                  data: data,
                  backgroundColor: [
                     'Red',
                     'Blue'
                  ]
               }],

               // These labels appear in the legend and in the tooltips when hovering different arcs
               labels: [
                  'Male',
                  'Female'
               ]
            }
         )
         return dataRes
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getUsers();
   }, []);


   return (
      <div style={{ width: '45%', height: "45%" }}>
         <Pie data={data} />
      </div>
   );
};

export default Gender;
