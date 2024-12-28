import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileData: User = {
    firstName: "",
    lastName: "",
    username: "",
    gender: "",
    email: ""
  }

  constructor(private myprofileserv: LoginService) { }

  ngOnInit() {
    this.myprofileserv.GetMyProfile().subscribe((res) => {

      this.profileData = res
      console.log("profile found", this.profileData);

    }, (err) => {
      console.log("error in getting profle");

    })
  }

}
