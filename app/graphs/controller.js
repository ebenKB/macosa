import Controller from '@ember/controller';
import {computed, get, set} from '@ember/object';
import help from 'macosa/help/graph/index';

export default Controller.extend({
  type: 'bar',
  amountLabel: 'Order Amount',
  profitLabel: 'Profit Margin',

  actions: {
    change(){
      console.log('The radio has changed');
    }
  },
  chartdata: computed('model', function() {
    return {
      labels: get(this, 'model').mapBy('date'),
      datasets: [{
        label: this.amountLabel,
        data: get(this, 'model').mapBy('amount'),
        backgroundColor: get(this, 'model').map(() => {
          return this.getColour();
        }),
      }]
    };
  }),

  profitdata: computed('model', function() {
    return {
      labels: get(this, 'model').mapBy('date'),
      datasets: [{
        label: this.profitLabel,
        data: get(this, 'model').mapBy('profit'),
        backgroundColor: get(this, 'model').map(() => {
          return this.getColour();
        }),
      }]
    };
  }),

  monthOrders: computed('model', function() {

    // const totals = Array(12).fill(0);
    const mmOrders = Array(12).fill([
      {
        month: 'Jan',
        total: 0
      }
    ]);
    // const months = [];
    // create an array for the months
    for (let i = 0; i < 12; i++) {
      mmOrders[(i + 1)].month = i + 1;
    }

    let m;
    for (const d of get(this, 'model').content) {
      m = 0;
      const date = get(d, 'date');
      if (get(d, 'date')) {
        m = (this.getMonth(date) + 1);
        mmOrders[ m ].total = (mmOrders[m].total += (get(d, 'amount')));
      }
      // mmOrders.addObject({
      //   total: totals[ m ],
      //   month: m,
      // });

      // mmOrders[m] = {
      //   total: totals[ m ],
      //   month: months[m],
      // };

      // mmOrders[m].total = totals[m];

    }

    // mmOrders[m].month = m;
    return mmOrders;
  }),

  getColour() {
    const r = Math.random() * (255 - 0) + 0;
    const g = Math.random() * (255 - 0) + 0;
    const b = Math.random() * (255 - 0) + 0;
    return `rgb(${r},${g},${b})`;
  },

  getMonth(date) {
    const d = new Date(date);
    const month = d.getMonth();
    return month;
  },

  init() {
    this._super();
    set(this, 'help', help);
    set(this, 'options', {
      type: this.type,
      responsive: true,
      // title: {
      //   display: true,
      //   text: this.amountLabel,
      // },
      yAxes: [{
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              min: 0,
              beginAtZero: true,
              steps: 10,
              stepValue: 50,
            }
          }],
        }
      }],
      xAxes: [{
        barValueSpacing: 200,
        barPercentage: 1,
        barThickness: 16,
        maxBarThickness: 8,
        minBarLength: 12,
        gridLines: {
          offsetGridLines: true
        }
      }]
    });
  }
});
