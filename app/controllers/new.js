import Controller from '@ember/controller';
export default Controller.extend({
  isExpanded: false,
  actions: {
    toggleBody() {
      console.log("from parent controller");
      this.toggleProperty('isExpanded');
    }
  }
});
