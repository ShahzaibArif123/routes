import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NoPageComponent } from './no-page/no-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AboutComponent } from './about/about.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { homeGuardGuard } from './home-guard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path:'client/:id', component:UserDetailComponent
  },
  {
    path:'home',component:HomeComponent, canActivate:[homeGuardGuard]
  },
  {
    path:'admin', loadChildren:()=>import('./admin/admin.module')
    .then(m=>m.AdminModule)
  },
  {
    path:'about', component:AboutComponent, children:[
      {path:'company', component:AboutcompanyComponent},
      {path:'me', component:AboutmeComponent}
    ]
  },
  {
    path: '**', component: NoPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
