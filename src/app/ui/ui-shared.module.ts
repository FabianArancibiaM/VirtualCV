import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CardMenuComponent } from "./card-menu/card-menu.component";

@NgModule({
    declarations: [
        CardMenuComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardMenuComponent
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

})
export class UiSharedModule { }