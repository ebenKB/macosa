/* eslint-disable indent */
import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  infinity: service(),
  queryParams: {
    to: {
      refreshModel: true,
    },

    from: {
      refreshModel: true,
    }
  },
  model(params) {
    // return ({
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [{
    //     label: 'Number of Votes',
    //     data: [12, 19, 3, 5, 12, 3],
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.2)',
    //       'rgba(54, 162, 235, 0.2)',
    //       'rgba(255, 206, 86, 0.2)',
    //       'rgba(75, 192, 192, 0.2)',
    //       'rgba(153, 102, 255, 0.2)',
    //       'rgba(255, 159, 64, 0.2)'
    //     ],
    //     borderColor: [
    //       'rgba(255, 99, 132, 1)',
    //       'rgba(54, 162, 235, 1)',
    //       'rgba(255, 206, 86, 1)',
    //       'rgba(75, 192, 192, 1)',
    //       'rgba(153, 102, 255, 1)',
    //       'rgba(255, 159, 64, 1)'
    //     ],
    //     borderWidth: 1
    //   }]
    // });
    // return this.infinity.model('order');
    // return get(this, 'store').findAll('order');

    // check if the user wants to fetch between date intervals
    /**
     * to -- is the date where the query should end
     * from -- is the date where the query should start
     */
    if (params.to != null && params.from != null) {
      return get(this, 'store').query('order',
      params
      );
    } else {
      return get(this, 'store').findAll('order');
    }
  }
});
