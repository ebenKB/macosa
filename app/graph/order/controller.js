import Controller from '@ember/controller';
import {computed, get, set} from '@ember/object';
import help from 'macosa/help/graph/index';

export default Controller.extend({
  type: null,
  queryParams: ['to', 'from'],
  amountLabel: 'Order Amount',
  profitLabel: 'Profit Margin',
  groupByMonth: 'month',
  to: null,
  from: null,
  validMonthDate: false,

  actions: {
    change(){
      console.log('The radio has changed');
    },
    checkIfValidMonthDate() {
        if(this.from === null || this.to === null) {
          set(this, 'isValidMonthDate', false);
        }else {
          const from = new Date(this.from);
          const td = new Date(this.to);
          console.log('We are checking the valid month date:');
          const fDay = from.getDay();
          const fYear = from.getYear();
          const fMonth = from.getMonth();
    
          const tDay = td.getDay();
          const tMonth = td.getMonth();
          const tYear = td.getYear();
    
          if (fMonth === tMonth && fYear === fYear) {
            set(this, 'validMonthDate', true);
          } else {
            set(this, 'validMonthDate', false);
          }
        }
    },
    selectMonth(val){
      console.log('This is the month radion buttion', val);
    },
    selectYear(val){
      console.log('This is the year radio button', val);
    }
  },
  // monthOrdersData: computed('model', function() {
  //   return {
  //     labels: get(this, 'model').mapBy('date'),
  //     datasets: [{
  //       label: 'Monthly orders',
  //       data: get(this, 'model').mapBy('amount'),
  //       backgroundColor: get(this, 'model').map(() => {
  //         return this.getColour();
  //       }),
  //     }]
  //   };
  // }),

  // monthOrdersData: computed('model', function() {
  //   let daysOfMonth = Array.fill(31);
  //   let 
  //   const data = get(this, 'model');
  //   data.map((d) => {
  //     const date = d.date;
  //     if (data != null) {
  //       const day = date.getDay();
  //       const month = date.getMonth(); // NB: month array index starts from 0
  //       const year = date.getYear();
  //       daysOfMonth[day] = date;
  //     }
  //   });
  //   return null;
  // }),

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
        monthTotals[(month)] = monthTotals[(month)] + d.amount;
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
        monthTotals[(month)] = monthTotals[(month)] + d.profit;
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
