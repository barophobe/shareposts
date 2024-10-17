// import $ from 'jquery';
import 'bootstrap';
import { Tooltip, Toast, Popover } from 'bootstrap';
import '../public/css/main.scss';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);


// import 'bootstrap/dist/css/bootstrap.min.css';

$(window).load(function(e){
    $('.posterish').css('color', 'blue');
});


const testStuff = [4.17,4.4,3.92,4.42,4.57,5.2,5.7,3.4,3.2,4.89,4.57,4.21,5.01,4.82
,4.23,4.2,4.4,3.92,4.51,4.49,4.42,4.57];

const labels = [];
for (let i = 0; i < testStuff.length; ++i) {
  labels.push('' + i);
}

const data = {
  labels: labels,
  datasets: [{
    data: testStuff,
    // borderColor:'#362625'
    
    borderColor: '#0485E0'
  }]
};

const annotation1 = {
  type: 'line',
  borderColor:'#324E61',
  // borderColor: 'red',
  // borderDash: [6, 6],
  // borderDashOffset: 0,
  borderWidth: 1,
  label: {
    display: true,
    backgroundColor: 'rgba(102, 102, 102, 0.5)',
    content: (ctx) => 'Average: ' + average(ctx).toFixed(2)
  },
  scaleID: 'y',
  value: (ctx) => average(ctx)
};

const annotation2 = {
  type: 'line',
  // borderColor: 'rgba(102, 102, 102, 0.5)',
  borderColor: '#DE7031',
  borderDash: [6, 6],
  borderDashOffset: 0,
  borderWidth: 2,
  label: {
    display: true,
    backgroundColor: 'rgba(102, 102, 102, 0.5)',
    color: 'black',
    content: (ctx) => (average(ctx) + (standardDeviation(ctx)) * 2).toFixed(2) ,
    position: 'start',
    rotation: -90,
    yAdjust: -28
  },
  scaleID: 'y',
  value: (ctx) => average(ctx) + (standardDeviation(ctx) * 2)
};

const annotation3 = {
  type: 'line',
  // borderColor: 'rgba(102, 102, 102, 0.5)',
  borderColor: '#DE7031',
  borderDash: [6, 6],
  borderDashOffset: 0,
  borderWidth: 2,
  label: {
    display: true,
    backgroundColor: 'rgba(102, 102, 102, 0.5)',
    color: 'black',
    content: (ctx) => (average(ctx) - (standardDeviation(ctx)) * 2).toFixed(2),
    position: 'end',
    rotation: 90,
    yAdjust: 28
  },
  scaleID: 'y',
  value: (ctx) => average(ctx) - (standardDeviation(ctx) * 2)
};

const annotation4 = {
    type: 'line',
    // borderColor: 'rgba(102, 102, 102, 0.5)',
    borderColor: '#E10705',
    // borderDash: [6, 6],
    // borderDashOffset: 0,
    borderWidth: 3,
    label: {
      display: true,
      backgroundColor: 'rgba(102, 102, 102, 0.5)',
      color: 'black',
      content: (ctx) => (average(ctx) + (standardDeviation(ctx)) * 3).toFixed(2),
      position: 'end',
      rotation: 90,
      yAdjust: 28
    },
    scaleID: 'y',
    value: (ctx) => average(ctx) + (standardDeviation(ctx) * 3)
  };

  const annotation5 = {
    type: 'line',
    // borderColor: 'rgba(102, 102, 102, 0.5)',
    borderColor: '#E10705',
    // borderDash: [6, 6],
    // borderDashOffset: 0,
    borderWidth: 3,
    label: {
      display: true,
      backgroundColor: 'rgba(102, 102, 102, 0.5)',
      color: 'red',
      content: (ctx) => (average(ctx) - (standardDeviation(ctx)) * 3).toFixed(2),
      position: 'end',
      rotation: 90,
      yAdjust: 28
    },
    scaleID: 'y',
    value: (ctx) => average(ctx) - (standardDeviation(ctx) * 3)
  };

const config = {

  type: 'line',
  data,
  options: {
    tension: 0.1,
    scale: {
      y: {
        beginAtZero: false,
        border:{
          width:3
        },
        grid: { 
          display: false
         },
        max: 7.0,
        min: 2.0
      }
    },
    elements: {
      point:{
          radius: 3
      }
  },
    plugins: {
      annotation: {
        annotations: {
          annotation1,
          annotation2,
          annotation3,
          annotation4,
          annotation5
        }
      }
    }
  }
};


function average(ctx) {
  const values = ctx.chart.data.datasets[0].data;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function standardDeviation(ctx) {
  const values = ctx.chart.data.datasets[0].data;
  const n = values.length;
  const mean = average(ctx);
  return Math.sqrt(values.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
}

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
