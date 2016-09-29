import { NgModule, ModuleWithProviders } from '@angular/core';

// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MaterialModule.forRoot()],
    declarations: [],
    exports: [
        // Angular
        CommonModule, FormsModule, HttpModule,

        // Material
        MaterialModule
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
