import React from 'react';
import ReactDOM from 'react-dom';
import GaugeComponent from 'react-gauge-component';

// Generate a random test value between 0 and 100
const randomValue = Math.floor(Math.random() * 101);

// Render the gauge into an element with id "myGauge"
ReactDOM.render(
  <GaugeComponent
    value={randomValue}
    type="radial"
    arc={{
      colorArray: ['#5BE12C', '#EA4228'],
      padding: 0.02,
      width: 0.3,
      subArcs: [
        { limit: 20 },
        { limit: 40 },
        {},
        {}
      ]
    }}
    pointer={{
      type: "needle",
      animate: true,
      elastic: true,
      animationDuration: 2000
    }}
    labels={{
      valueLabel: {
        style: { fill: '#fff', fontSize: '26px' },
        formatTextValue: val => `${val} %`
      }
    }}
    minValue={0}
    maxValue={100}
  />,
  document.getElementById('myGauge')
);
