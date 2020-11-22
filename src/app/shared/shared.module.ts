import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        FooterComponent,
        MenuComponent,
        ButtonComponent,
    ]
})
export class SharedModule {
}
