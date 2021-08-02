import { useState, useEffect } from 'react';
import { Chart as ChartJs, registerables } from 'chart.js';

import 'styles/chart.css';

ChartJs.register(...registerables);

const Chart = ({ monthlyDataset, cumulativeDataset, labels }) => {
  const [ chart, setChart ] = useState(null);


  useEffect(() => {
    const config = {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Monthly',
          data: monthlyDataset,
          fill: false,
          borderColor: 'red',
          tension: 0.1
        },{
          label: 'Cumulative',
          data: cumulativeDataset,
          fill: false,
          borderColor: 'blue',
          tension: 0.1
        }]
      },
      options: {}
    }
    if (chart) {
      chart.data.datasets[0].data = monthlyDataset;
      chart.data.datasets[1].data = cumulativeDataset;
      chart.update();
    } else {
      setChart(new ChartJs(
        document.getElementById('myChart'),
        config
      ))
    }
    // eslint-disable-next-line
  }, [monthlyDataset, cumulativeDataset])

  return (
    <div className='chart-container'>
      <canvas id='myChart' />
    </div>

  );
};

export default Chart;
