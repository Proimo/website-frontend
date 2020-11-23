import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OfferSectionComponent } from './components/offer-section/offer-section.component';
import { OfferComponent } from './components/offer/offer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TeamMembersComponent } from './components/team-member/team-members.component';
import { BecomeAgentComponent } from './components/become-agent/become-agent.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HomePageRoutingModule } from './home-page-routing.module';


@NgModule({
    declarations: [
        HomePageComponent,
        BannerComponent,
        SearchBarComponent,
        OfferSectionComponent,
        OfferComponent,
        CarouselComponent,
        TeamMembersComponent,
        BecomeAgentComponent,
    ],
    imports: [
        SharedModule,
        FormsModule,
        HomePageRoutingModule
    ],
})
export class HomePageModule {
}
