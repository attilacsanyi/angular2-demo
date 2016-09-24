import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule } from '@ngrx/store-log-monitor';
import { routesMockProviders } from './shared/mocks';
import { AppComponent } from './app.component';

describe('App: Angular2Demo', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        MdToolbarModule, MdIconModule,
        StoreDevtoolsModule,
        StoreLogMonitorModule
      ],
      declarations: [AppComponent],
      providers: [...routesMockProviders, MdIconRegistry]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Hello Angular 2 !'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.componentInstance.ngOnInit();
    expect(app.title).toEqual('Hello Angular 2 !');
  }));

  it('should render title in a span tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('Hello Angular 2 !');
  }));
});
