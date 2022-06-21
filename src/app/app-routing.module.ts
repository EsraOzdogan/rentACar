import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AddBrandComponent } from './components/pages/brand/add-brand/add-brand.component';
import { BrandComponent } from './components/pages/brand/brand.component';
import { EditBrandComponent } from './components/pages/brand/edit-brand/edit-brand.component';
import { AddCarComponent } from './components/pages/car/add-car/add-car.component';
import { CarComponent } from './components/pages/car/car.component';
import { EditCarComponent } from './components/pages/car/edit-car/edit-car.component';
import { RentCarComponent } from './components/pages/car/rent-car/rent-car.component';
import { AddColorComponent } from './components/pages/color/add-color/add-color.component';
import { ColorComponent } from './components/pages/color/color.component';
import { EditColorComponent } from './components/pages/color/edit-color/edit-color.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ReservationComponent } from './components/pages/reservation/reservation.component';
import { ExitGuard } from './guards/exit.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
 {path:"",pathMatch:"full", component:CarComponent},
 { path: 'login', component: LoginComponent, canDeactivate:[ExitGuard] },
 { path: 'register', component: RegisterComponent, canDeactivate:[ExitGuard] },
 { path:"brands", component:BrandComponent},
 { path:"add-brand", component:AddBrandComponent},
 { path:"edit-brand/:id", component:EditBrandComponent,canDeactivate:[ExitGuard]},
 { path:"colors", component:ColorComponent},
 { path:"add-color", component:AddColorComponent},
 { path:"edit-color/:id", component:EditColorComponent},
 { path:"cars", component:CarComponent},
 { path:"add-car", component:AddCarComponent, canActivate:[LoginGuard]},
 { path:"edit-car/:id", component:EditCarComponent},
 { path:"rent-car/:id", component:RentCarComponent},
 { path:"reservation", component:ReservationComponent},
 {path:"**", component:NotFoundComponent},

//  {path:"brands/:brandId", component:CarComponent},
//  {path:"colors/:colorId", component:CarComponent},


 //{path:"products/category/:id", component:ProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
