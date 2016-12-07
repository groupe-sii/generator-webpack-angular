import AppModule from '../../src/app/app';

describe('App', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(AppModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
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

    it('Template should contains `My App`', () => {
      template.html().should.equal('My App\n');
    });

  });
});
