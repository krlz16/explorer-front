'use client'
import React, { useEffect, useRef } from 'react';
import Chart, { ChartOptions } from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import Card from '@/components/ui/Card';
import { IBlocks } from '@/common/interfaces/Blocks';

const TxsChart = ({ blocks }: { blocks: IBlocks[] | undefined }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>();
  const reverseData = blocks?.reverse();
  const dataBlocks = reverseData?.map((block) => block.txDensity);
  const labels = reverseData?.map((block) => `Block #${block.number}`);
  
  if (chartInstance.current && dataBlocks) {
    chartInstance.current.data = {
      labels: labels,
      datasets: [
        {
          data: dataBlocks.reverse(),
          borderColor: '#FF9100',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          borderWidth: 2,
        },
      ],
    };
    chartInstance.current.update();
  }
  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext('2d');
    if (!ctx && !blocks) return;

    const data = {
      labels: labels,
      datasets: [
        {
          data: dataBlocks,
          borderColor: '#FF9100',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          borderWidth: 2,
        },
      ],
    };


    chartInstance.current = new Chart(ctx!, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          interaction: {
            intersect: false,
            mode: 'index',
          },
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          tooltip: {
            intersect: false,
            titleColor: '#4A90E2',
            bodyColor: '#ffffff',
            borderColor: 'transparent',
            borderWidth: 0,
            pointStyle: 'star',
            position: 'nearest',
            displayColors: false,
            callbacks: {
              label: function (tooltipItem) {
                const blockIndex = tooltipItem.dataIndex;
                console.log('blockIndex: ', blockIndex);
                if (!reverseData) return '';
                const block = reverseData[(reverseData.length - 1) - blockIndex];

                return [
                  `Block: ${block.number}`,
                  `Txd: ${block.txDensity.toFixed(2)}`,
                  `Txs: ${block.transactions}`,
                ];
              },
              title: function () {
                return '';
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false
            },
          },
          y: {
            grid: {
              color: '#1b1b1b',
            },
            ticks: {
              color: '#b8b8b8',
            },
          },
        },
        onClick: (e) => {
          if (!chartInstance.current) return;
          
          const canvasPosition = getRelativePosition(e, chartInstance.current);
          const dataX = chartInstance.current.scales.x.getValueForPixel(canvasPosition.x);
          const dataY = chartInstance.current.scales.y.getValueForPixel(canvasPosition.y);
          console.log('chartInstance.current: ', chartInstance.current.data.datasets);
          const value = chartInstance.current.data.datasets[0].data[dataX!];
          console.log('value: ', value);

          console.log('Posición en X:', dataX, 'Posición en Y:', dataY);
        },
      } as ChartOptions,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [blocks, dataBlocks, labels, reverseData]);

  return (
    <Card className='h-50 w-full bg-secondary'>
      <h2 className='mb-2 text-lg font-medium'>Transaction Density</h2>
      <div className='w-full h-32'>
        <canvas
          ref={chartRef}
          style={{ width: '100%', height: '110px' }}
        />
      </div>
    </Card>
  );
};

export default TxsChart;
