import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchCommittees() {
      if (house.checked === true && senate.checked === false) {
        var prams = {
          chamber: "house"
        };
        this.sendAction('searchCommittees', prams);
      } else if (senate.checked === true && house.checked === false) {
        var prams = {
          chamber: "senate"
        };
        this.sendAction('searchCommittees', prams);
      } else if (senate.checked === true && house.checked === true) {
        var prams = {
          chamber: "joint"
        };
        this.sendAction('searchCommittees', prams);
      }
    }
  }
});
