import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SocialMediaSharingComponent } from './components/toolbar/social-media-sharing/social-media-sharing/social-media-sharing.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { CityLocationComponent } from './components/city-location/city-location.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentTabsComponent } from './components/content-tabs/content-tabs.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolbarComponent,
    SocialMediaSharingComponent,
    SideNavComponent,
    WeatherDataComponent,
    CityLocationComponent,
    ContentTabsComponent,
    PercentagePipe,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
