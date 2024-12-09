"use client";
import React from 'react';
import { Chart as ChartJS, RadialLinearScale, CategoryScale,LinearScale,PointElement,LineElement,Title, ArcElement, Tooltip, Legend, scales, Ticks } from 'chart.js';
import { Doughnut, Line, PolarArea } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { color } from 'chart.js/helpers';
import { useEffect, useState } from 'react';

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

export const CompletedInterviewChart = () => {

    return (
        <>          
            <Doughnut data={dataWawancara} options={options} />
        </>
                
      );

}
//doughnut2
const dataPerusahaan: ChartData<'doughnut'> = {
    labels: ['Perusahaan terdaftar', 'Request perusahaan', 'magang selesai', 'reject/dihapus'],
    datasets: [
      {
        data: [35, 10, 15, 10],
        backgroundColor: [
          '#5ea6f2',
          '#66d9ca',
          '#826bf9',
          '#9f8dfc'
          
        ],
        borderColor: [
          '#5ea6f2',
          '#66d9ca',
          '#826bf9',
          '#9f8dfc'
          
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const optionsPerusanaan: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
        align: 'start',
        maxWidth: 1000,
        labels: {
          padding: 10,
          boxWidth: 20,
          usePointStyle: true
        },
        rtl: false,
        textDirection: 'ltr',
        fullSize: true
      },
      title: {
        display: true,
        text: 'Company General Chart',
      },
    },
  };

export const ChartPerusahaan = () => {

    return (
        <>          
            <Doughnut data={dataPerusahaan} options={optionsPerusanaan} />
        </>
                
      );

}

// daily usage

const options2 = {
  responsive: true,
  scales: {
      y: {
          beginAtZero: true,
          
          ticks: {
              stepSize: 10,
              color: '#666'
          },
          grid: {
              color: 'rgba(200, 200, 200, 0.2)',
              drawBorder: false,
              drawTicks: true
          }
      },
      x: {
          grid: {
              color: 'rgba(200, 200, 200, 0.2)',
              drawBorder: false
          },
          ticks: {
              color: '#666'
          }
      }
  },
  plugins: {
      legend: {
          labels: {
              color: '#666'
          }
      }
  }
}
const labels = ['10/Feb', '11/Feb', '12/Feb', '13/Feb', '14/Feb', '15/Feb', '16/Feb', '17/Feb', '18/Feb', '19/Feb', '20/Feb'];

const data = {
  labels,
  datasets: [
    {
      label: 'Daily usage',
      data: [0, 20, 40, 100,20,30, 89, 21,23,9, 20,4],
      borderColor: '#826bf9',
      backgroundColor: '#9f8dfc',
      tension: 0.1
    },
  ],
};


export const DailyInterview = () => {
 
  return (
    <>
    
      <Line options={options2} data={data} />
    </>
  );
};


