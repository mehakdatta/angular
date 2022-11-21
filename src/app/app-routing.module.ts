import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'viewappointment', component: ViewappointmentComponent },
  { path: 'placeappointment', component: PlaceappointmentComponent },
  { path: 'contact', component: ContactComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
