import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        // Angular
        CommonModule, RouterModule,

        // Material
        MaterialModule,

        // Flex Layout
        FlexLayoutModule,
    ],
    declarations: [],
    exports: [
        // Angular
        CommonModule, RouterModule, FormsModule, HttpModule,

        // Material
        MaterialModule,

        // Flex Layout
        FlexLayoutModule,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
