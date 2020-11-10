import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BannerComponent } from './pages/home-page/components/banner/banner.component';
import { SearchBarComponent } from './pages/home-page/components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { OfferSectionComponent } from './pages/home-page/components/offer-section/offer-section.component';
import { OfferComponent } from './pages/home-page/components/offer/offer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        MenuComponent,
        BannerComponent,
        SearchBarComponent,
        FooterComponent,
        OfferSectionComponent,
        OfferComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
