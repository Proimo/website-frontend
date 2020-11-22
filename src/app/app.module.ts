import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { BannerComponent } from './pages/home-page/components/banner/banner.component';
import { SearchBarComponent } from './pages/home-page/components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { OfferSectionComponent } from './pages/home-page/components/offer-section/offer-section.component';
import { OfferComponent } from './pages/home-page/components/offer/offer.component';
import { CarouselComponent } from './pages/home-page/components/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        BannerComponent,
        SearchBarComponent,
        OfferSectionComponent,
        OfferComponent,
        CarouselComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        HttpClientModule,
        SharedModule,
        FormsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
