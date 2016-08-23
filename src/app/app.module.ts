import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';

// Modules
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {CounterModule} from './counter/counter.module';

// Components
import {AppComponent} from './app.component';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

// Providers
import {STORE_PROVIDERS} from './core/states';

import {routing} from './app.routing';

@NgModule({
    imports: [
        // Angular
        BrowserModule,

        HomeModule, CounterModule,
        routing,
        SharedModule.forRoot()
    ],
    declarations: [
        AppComponent,
        StoreLogMonitorComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        STORE_PROVIDERS
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
