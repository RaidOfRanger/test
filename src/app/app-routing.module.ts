import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProductComponent } from './Components/product/product.component';
import { UserpageComponent } from './Components/userpage/userpage.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'user',component:UserpageComponent,canActivate:[authGuard]
  },
  {
    path:'product',component:ProductComponent,canActivate:[authGuard]
  },
  {
    path:'profile',component:ProfileComponent,canActivate:[authGuard]
  },
  { 
    path: '', redirectTo: '/login', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
