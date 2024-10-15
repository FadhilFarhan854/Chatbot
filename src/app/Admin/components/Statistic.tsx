"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
// const data: ChartData<'doughnut'> = {
//     labels: ['Red', 'Blue', 'Yellow'],
//     datasets: [
//       {
//         data: [12, 19, 30],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.8)',
//           'rgba(54, 162, 235, 0.8)',
//           'rgba(255, 206, 86, 0.8)',
          
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
          
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
  
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Doughnut Chart Example',
      },
    },
  };

export const Statistic1 = () => {

    return (
        <>
            <section className='p-3 w-full h-full shadow-black shadow-md bg-[#24252b] border-[#24252b] border-2 rounded-xl'>
                <div className='w-full flex h-[50%]  justify-between'>
                    
                </div>
            </section>
            {/* <Doughnut data={data} options={options} className='w-[30%]' />
                    <Doughnut data={data} options={options} />
                    <Doughnut data={data} options={options} /> */}
        </>
                
      );

}
