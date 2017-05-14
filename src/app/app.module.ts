import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';

// Components
import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { store } from './app.store';

@NgModule({
    imports: [
        // Angular
        BrowserModule, BrowserAnimationsModule,

        HomeModule.forRoot(),
        routing,
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
