import { ContactusComponent } from './Components/contactus/contactus.component';
import { ChooseComponent } from './Components/choose/choose.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurservicesComponent } from './Components/ourservices/ourservices.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"choose", component:ChooseComponent},
  { path:"contactus", component:ContactusComponent},
  { path:"ourservices", component:OurservicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
