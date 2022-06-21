import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule} from "ngx-toastr";


//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { BrandListComponent } from './common/brand-list/brand-list.component';
import { BrandComponent } from './components/pages/brand/brand.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ColorComponent } from './components/pages/color/color.component';
import { EditBrandComponent } from './components/pages/brand/edit-brand/edit-brand.component';
import { AddBrandComponent } from './components/pages/brand/add-brand/add-brand.component';
import { AddColorComponent } from './components/pages/color/add-color/add-color.component';
import { ColorListComponent } from './common/color-list/color-list.component';
import { EditColorComponent } from './components/pages/color/edit-color/edit-color.component';
import { CarComponent } from './components/pages/car/car.component';
import { AddCarComponent } from './components/pages/car/add-car/add-car.component';
import { EditCarComponent } from './components/pages/car/edit-car/edit-car.component';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CartSummaryComponent } from './common/cart-summary/cart-summary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentCarComponent } from './components/pages/car/rent-car/rent-car.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { ReservationComponent } from './components/pages/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    BrandListComponent,
    BrandComponent,
    HomePageComponent,
    ColorComponent,
    EditBrandComponent,
    AddBrandComponent,
    AddColorComponent,
    ColorListComponent,
    EditColorComponent,
    CarComponent,
    AddCarComponent,
    EditCarComponent,
    FilterCarPipe,
    FilterBrandPipe,
    FilterColorPipe,
    CartSummaryComponent,
    RentCarComponent,
    LoginComponent,
    RegisterComponent,
    CarCardComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
