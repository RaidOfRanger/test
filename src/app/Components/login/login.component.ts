import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  imageSrc: string | null = 'http://example.com/nonexistent.jpg'; 

  loginform = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private loginServ: LoginService, private router: Router){

  }

  logMeIn(){

    this.loginServ.Verifylogin(this.loginform.value).subscribe((res) => {
      
      const resp = JSON.parse(JSON.stringify(res)) 
      
      const accesToken = resp.accessToken
      localStorage.setItem("AccessToken",accesToken)
      this.router.navigate(["profile"])
    },(err)=>{
      alert("Username Or Password is wrong")
    })
  }

}
