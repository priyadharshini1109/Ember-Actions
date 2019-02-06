import Controller from '@ember/controller';

export default Controller.extend({
  // new:Ember.inject.controller('new'),
  actions:{
    toggleBody(){
      this.sendAction('toggleBody');
    }
  }
});
