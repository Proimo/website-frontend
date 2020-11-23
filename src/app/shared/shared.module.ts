import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        RouterModule
    ],
    exports: [
        CommonModule,
        FooterComponent,
        MenuComponent,
        ButtonComponent,
    ]
})
export class SharedModule {
}
