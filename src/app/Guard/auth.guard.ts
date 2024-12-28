import { HttpClient } from '@angular/common/http';
import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)  
  const http = inject(HttpClient)
  const myprofile = inject(LoginService)
  const token = localStorage.getItem('AccessToken'); 
  
  if(token){
    myprofile.GetMyProfile().subscribe((res:any)=>{
      return true
    },(err:any)=>{
      router.navigate(['/login'])
    })

    return true;
  }else{
    router.navigate(['/login'])
    return false;
  }


};
