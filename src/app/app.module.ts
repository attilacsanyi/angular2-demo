import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';

// Modules
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {CounterModule} from './counter/counter.module';

// Components
import {AppComponent} from './app.component';

import {routing} from './app.routing';
import {store} from './app.store';

@NgModule({
    imports: [
        // Angular
        BrowserModule,

        HomeModule, CounterModule,
        routing,
        SharedModule.forRoot(),
        store
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
