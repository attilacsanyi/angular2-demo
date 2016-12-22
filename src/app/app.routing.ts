import { RouterModule, PreloadAllModules } from '@angular/router';

export const routing = RouterModule.forRoot(
    [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'counter', loadChildren: './counter/counter.module#CounterModule' },
    ],

    // Preload all Lazy modules while the user start navigating the app 
    { preloadingStrategy: PreloadAllModules }
);
