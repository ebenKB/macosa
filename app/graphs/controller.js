import Controller from '@ember/controller';
import {computed, get, set} from '@ember/object';
import help from 'macosa/help/graph/index';

export default Controller.extend({
  type: 'bar',
  queryParams: ['to', 'from'],
  amountLabel: 'Order Amount',
  profitLabel: 'Profit Margin',
  groupByMonth: 'month',
  to: null,
  from: null,

  actions: {
    change(){
      console.log('The radio has changed');
    }
  },

  monthOrdersAmountGroupData: computed('model', function() {
    const datasets = get(this, 'monthOrdersAmountGroup');
    return {
      labels: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct.', 'Nov', 'Dec.'],
      datasets
    };
  }),

  monthOrdersProfitGroupData: computed('model', function() {
    const datasets = get(this, 'monthOrdersProfitGroup');
    return {
      labels: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct.', 'Nov', 'Dec.'],
      datasets
    };
  }),

  // monthGroupChart:
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

  // group the data by month
  monthOrdersAmountGroup: computed('model', function() {
    const monthTotals = Array(12).fill(0);
    const data = get(this, 'model');
    data.map(d => {
      // console.log('these are the params', d.date, d.amount);
      if (d.date != null) {
        const localDate = new Date(d.date);
        const month = localDate.getMonth();
        // console.log('This is the month number', month);

        // add the total to the month array of total
        monthTotals[(month - 1)] = monthTotals[(month - 1)] + d.amount;
      }
      return null;
    });

    const datasets = [{
      label: 'Monthly orders',
      data: monthTotals,
      backgroundColor: get(this, 'model').map(() => {
        return this.getColour();
      }),
    }];
    // console.log('This is the Has we are returning', datasets);
    return datasets;
  }),

  monthOrdersProfitGroup: computed('model', function() {
    const monthTotals = Array(12).fill(0);
    const data = get(this, 'model');
    data.map(d => {
      // console.log('these are the params', d.date, d.amount);
      if (d.date != null) {
        const localDate = new Date(d.date);
        const month = localDate.getMonth();
        // console.log('This is the month number', month);

        // add the total to the month array of total
        monthTotals[(month - 1)] = monthTotals[(month - 1)] + d.profit;
      }
      return null;
    });

    const datasets = [{
      label: 'Monthly Profit',
      data: monthTotals,
      backgroundColor: get(this, 'model').map(() => {
        return this.getColour();
      }),
    }];
    // console.log('This is the Has we are returning', datasets);
    return datasets;
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
