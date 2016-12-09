import 'angular';
import 'angular-mocks';

let testsContext = require.context('./unit', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
