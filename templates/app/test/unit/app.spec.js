import 'angular';
import 'angular-mocks';
import AppModule from '../../src/app/app';

describe('App', () => {
  let <% if (angularTranslate) { %>$httpBackend, <% } %>$rootScope, $state, $location, $compile;

  beforeEach(angular.mock.module(AppModule));

  beforeEach(angular.mock.inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
<% if (angularTranslate) { -%>
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('fr-FR.json').respond(200, {});
<% } -%>
  }));

  describe('Module', () => {
    it('App component should be visible when navigates to /', () => {
      $location.url('/');
      $rootScope.$digest();
      $state.current.component.should.equal('app');
    });
  });

  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<app></app>')(scope);
      scope.$apply();
    });

    it('Template should contains a title', () => {
      template.html().should.equal(<% if (angularTranslate) { -%>'app.title'<% } else { -%>'My App'<% } -%>);
    });

  });
});
