import Route from '@ember/routing/route';
let data=[{
  body:'this is the body part'
}]
export default Route.extend({
  model(){
    return data;
  },
  isExpanded: false,
  actions: {
    toggleBody() {
      console.log("from parent route");
      this.toggleProperty('isExpanded');
    }
  }
});
