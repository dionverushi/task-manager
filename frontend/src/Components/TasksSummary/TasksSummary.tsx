import 'react-circular-progressbar/dist/styles.css';

import { Divider } from '@nextui-org/react';
import {
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CircularProgressbar } from 'react-circular-progressbar';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

ChartJs.defaults.color = '#FFFF';
ChartJs.defaults.borderColor = '#FFFF';

export const TasksSummary = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        color: 'white',
      },
      title: {
        display: true,
        text: 'Progress',
        color: 'white',
      },
    },
  };

  const labels = ['31/05', '01/06', '02/06'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * 101)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.floor(Math.random() * 101)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="flex w-full bg-slate-600 text-white rounded p-4 px-14">
      <div className="flex flex-col flex-1 justify-center">
        <p>Total Tasks</p>
        <h1 className="text-headline_1 font-bold">50</h1>
      </div>

      <div className="flex flex-col flex-1 gap-5 justify-center">
        <div>
          <p>List Created</p>
          <p className="font-bold">11/12/17</p>
        </div>

        <div>
          <p>Tasks Active For</p>
          <p className="font-bold">46 days</p>
        </div>
      </div>

      <div>
        <Divider className="bg-white" orientation="vertical" />
      </div>

      <div className="flex pl-14 flex-col flex-1 gap-5 justify-center py-2">
        <div>
          <p>Completed</p>
          <h1 className="text-headline_2 text-success-400">12</h1>
        </div>

        <div>
          <p>Incomplete</p>
          <h1 className="text-headline_2 text-warning-400">46</h1>
        </div>
      </div>

      <div className="flex items-center ">
        <div className="w-36 h-36 ">
          <CircularProgressbar value={66} text="60%" />
        </div>
      </div>

      <div className="pr-14 flex flex-col flex-1 gap-5 justify-center py-2">
        <div className="text-right">
          <p>In Progress</p>
          <h1 className="text-headline_2 text-primary-400">2</h1>
        </div>

        <div className="text-right">
          <p>Waived</p>
          <h1 className="text-headline_2">0</h1>
        </div>
      </div>

      <div>
        <Divider className="bg-white" orientation="vertical" />
      </div>

      <div className="pl-14">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
