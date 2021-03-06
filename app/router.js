import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new', function() {
    this.route('nested1', function() {
      this.route('nested2');
    });
  });
});

export default Router;
