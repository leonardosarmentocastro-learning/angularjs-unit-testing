const app = 'nodejs-client-quickstart';

describe('Home controller: ', function() {
  /**
   * Modules.
   */
  beforeEach(module(app));

  /**
   * Globals
   */
  let ctrl, HomeService;


  /**
   * Inject dependencies.
   */
  beforeEach(
    inject(function($controller, _HomeService_) {
      /**
       * Attach the controller and its dependencies to the globals variables.
       */
      HomeService = _HomeService_;

      ctrl = $controller('HomeController', {
        HomeService: HomeService
      });
    })
  );

  /**
   * Tests
   */
  it('must have some specific global properties', function() {
    expect(ctrl.home.foo).toBeDefined();
  });
});
