import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SlidersectionComponent } from './slidersection/slidersection.component';
import { FeaturesectionComponent } from './featuresection/featuresection.component';
import { ClientsectionComponent } from './clientsection/clientsection.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    SlidersectionComponent,
    FeaturesectionComponent,
    ClientsectionComponent,
    AboutusComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
