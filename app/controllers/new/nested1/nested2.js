import Controller from '@ember/controller';

export default Controller.extend({
  // new:Ember.inject.controller('new/nested1'),
  actions:{
    toggleBody(){
      this.sendAction('toggleBody');
    }
  }
});
