import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchCommittees() {
      if (house.checked === true) {
        var prams = {
          chamber: "house"
        };
        this.sendAction('searchCommittees', prams);
      } else if (senate.checked === true) {
        var prams = {
          chamber: "senate"
        };
        this.sendAction('searchCommittees', prams);
      }
    }
  }
});
