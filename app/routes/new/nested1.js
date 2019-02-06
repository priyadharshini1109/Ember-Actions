import Route from '@ember/routing/route';

export default Route.extend({
  isExpanded: false,
  actions: {
    toggleBody() {
      console.log("from child route");
      this.toggleProperty('isExpanded');
    }
  }
});
