import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  showme:boolean = true

  constructor(private router: Router){}

  ngDoCheck(){
    const currentroute = this.router.url

    if(currentroute.includes('login')){
      this.showme = false
    }
    else{
      this.showme = true
    }
  }
}
