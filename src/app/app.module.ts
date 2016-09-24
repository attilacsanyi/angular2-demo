import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';

/** TODO: remove when work-around is not needed*/
import 'hammerjs';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

// Components
import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { store } from './app.store';

@NgModule({
    imports: [
        // Angular
        BrowserModule,

        HomeModule,
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
