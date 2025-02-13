(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('react-gauge-component')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'react-gauge-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.React, global.ReactDOM, global.reactGaugeComponent));
})(this, (function (React, ReactDOM, reactGaugeComponent) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  // Generate a random test value between 0 and 100
  const randomValue = Math.floor(Math.random() * 101);

  // Render the gauge into an element with id "myGauge"
  ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(reactGaugeComponent.GaugeComponent, {
    value: randomValue,
    type: "radial",
    arc: {
      colorArray: ['#5BE12C', '#EA4228'],
      padding: 0.02,
      width: 0.3,
      subArcs: [{
        limit: 20
      }, {
        limit: 40
      }, {}, {}]
    },
    pointer: {
      type: "needle",
      animate: true,
      elastic: true,
      animationDuration: 2000
    },
    labels: {
      valueLabel: {
        style: {
          fill: '#fff',
          fontSize: '26px'
        },
        formatTextValue: val => "".concat(val, " %")
      }
    },
    minValue: 0,
    maxValue: 100
  }), document.getElementById('myGauge'));

}));
