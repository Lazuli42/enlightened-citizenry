import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  committeeName: "",
  model: function(params) {
    this.set('committeeName', params.name);
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + params.committee_id + '&apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
