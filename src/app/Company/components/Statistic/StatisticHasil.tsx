"use client";
import React from 'react';
import { Chart as ChartJS, RadialLinearScale, CategoryScale,LinearScale,PointElement,LineElement,Title, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut} from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';


ChartJS.register(
  ArcElement,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const dataWawancara: ChartData<'doughnut'> = {
    labels: ['Belum Wawancara', 'Sudah Wawancara'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [
          '#5ea6f2',
          '#66d9ca',
          
          
        ],
        borderColor: [
          '#5ea6f2',
          '#66d9ca',
          
          
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'center',
        maxWidth: 1000,
        
      },
      title: {
        display: true,
        text: 'User completion chart',
      },
    },
  };

export const CompletedInterviewChartbyID = () => {

    return (
        <>          
            <Doughnut data={dataWawancara} options={options} />
        </>
                
      );

}