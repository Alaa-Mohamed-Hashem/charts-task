import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'

const AgeChart = () => {
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
      if (!users) return;
      const ages = users.map(user => user.dob.age);

      const ageHash = {
         "0-10": 0,
         "11-20": 0,
         "21-30": 0,
         "31-40": 0,
         "41-50": 0,
         "51-60": 0,
         "61-70": 0,
         "71-80": 0,
         "81-90": 0
      }

      ages.forEach(age => {
         if (age > 0 && age <= 10) {
            ageHash["0-10"]++;
         } else if (age > 10 && age <= 20) {
            ageHash["11-20"]++;
         } else if (age > 20 && age <= 30) {
            ageHash["21-30"]++;
         } else if (age > 30 && age <= 40) {
            ageHash["31-40"]++;
         } else if (age > 40 && age <= 50) {
            ageHash["41-50"]++;
         } else if (age > 50 && age <= 60) {
            ageHash["51-60"]++;
         } else if (age > 60 && age <= 70) {
            ageHash["61-70"]++;
         } else if (age > 70 && age <= 80) {
            ageHash["71-80"]++;
         } else if (age > 80 && age <= 90) {
            ageHash["81-90"]++;
         }
      });

      let ctx = document.getElementById("myCanvas").getContext("2d");

      new Chart(ctx, {
         type: "bar",
         data: {
            labels: Object.keys(ageHash),
            datasets: [
               {
                  label: "Num of user",
                  data: Object.values(ageHash),
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
}

export default AgeChart;