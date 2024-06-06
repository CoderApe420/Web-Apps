import { Routes } from '@angular/router';
import { TrickGeneratorComponent } from "./trick-generator/trick-generator.component";
import { TrickOverviewComponent  } from "./trick-overview/trick-overview.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Generator', component: TrickGeneratorComponent},
  {path: 'Overview', component: TrickOverviewComponent}

];
