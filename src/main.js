import { Aurelia, PLATFORM } from 'aurelia-framework';

require('./app.scss');

export function configure(aurelia) {
  aurelia.use
         .standardConfiguration()
         .developmentLogging();
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}