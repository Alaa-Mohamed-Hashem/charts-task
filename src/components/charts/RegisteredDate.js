import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const RegisteredDate = () => {
   const [users, setUsers] = useState();

   const getAllAge = async () => {
      try {
         const res = await fetch('https://randomuser.me/api/?seed=dexi-interview&results=100');
         const data = await res.json();
         setUsers(data.results);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getAllAge();
   }, []);

   useEffect(() => {
      if (!users) return
      const registeredDate = users.map(u => new Date(u.registered.date).getFullYear());

      let dataHash = {};
      registeredDate.forEach(age => {
         if (dataHash[age]) {
            dataHash[age]++
         } else {
            dataHash[age] = 1
         }
      });

      let ctx = document.getElementById("myCanvas").getContext("2d");

      new Chart(ctx, {
         type: "line",
         data: {
            labels: Object.keys(dataHash),
            datasets: [
               {
                  label: "Num of user",
                  data: Object.values(dataHash),
                  backgroundColor: [
                     "rgba(255, 99, 132, 0.2)",
                     "rgba(54, 162, 235, 0.2)",
                     "rgba(255, 206, 86, 0.2)",
                     "rgba(75, 192, 192, 0.2)",
                     "rgba(153, 102, 255, 0.2)",
                     "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                     "rgba(255, 99, 132, 1)",
                     "rgba(54, 162, 235, 1)",
                     "rgba(255, 206, 86, 1)",
                     "rgba(75, 192, 192, 1)",
                     "rgba(153, 102, 255, 1)",
                     "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1
               }
            ]
         },
      });
   });

   return (
      <canvas id="myCanvas" width="250" height="100"></canvas>
   )
};

export default RegisteredDate;