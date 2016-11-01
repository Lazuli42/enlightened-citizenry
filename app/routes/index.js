import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    searchCommittees(prams) {
      this.transitionTo('committees', prams.chamber);
    },
    goToBills() {
      this.transitionTo('bills');
    }
  }
});
