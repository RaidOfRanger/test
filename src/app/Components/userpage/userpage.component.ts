import { Component } from '@angular/core';
import { AllUser } from 'src/app/Model/user.model';

import { UsersService } from 'src/app/Services/users.service';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {

  allusers :AllUser[] = []

  searchtext : string = ""

  constructor(private userserv: UsersService){

  }

  ngOnInit(){ 
    this.userserv.getAllUser().subscribe((res: any)=>{
      this.allusers = res.users
    },(err)=>{
      console.log("error while fetching all user",err);
    })
  }



}
