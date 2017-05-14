import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home.component';

import { routing } from './home.routing';

@NgModule({
    imports: [SharedModule, routing],
    exports: [SharedModule],
    declarations: [HomeComponent]
})
export class HomeModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HomeModule,
            providers: []
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
        if (parentModule) {
            throw new Error('HomeModule is already loaded. Import it in the AppModule only!');
        }
    }
}
