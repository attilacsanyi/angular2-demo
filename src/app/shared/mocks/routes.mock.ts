import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterOutletMap } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Testing helpers for routing.
 * Url: https://dzone.com/articles/getting-started-and-testing-with-angular-cli-and-angular-2-rc5-part-2
 */

class MockRouterOutletMap {
  registerOutlet = jasmine.createSpy('registerOutlet');
  removeOutlet = jasmine.createSpy('removeOutlet');
}

class MockActivatedRoute extends ActivatedRoute {
  params: Observable<Params>;
  constructor(parameters?: { [key: string]: any; }) {
    super();
    this.params = Observable.of(parameters);
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

export const routesMockProviders: any = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: RouterOutletMap, useClass: MockRouterOutletMap },
  { provide: ActivatedRoute, useValue: MockActivatedRoute },
  { provide: Router, useValue: MockRouter }
];
