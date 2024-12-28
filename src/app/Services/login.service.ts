import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // url :string = 'https://dummyjson.com/test'

  constructor(private http: HttpClient) { }

  Verifylogin(data: any){

    return this.http.post('https://dummyjson.com/auth/login',data)
  }

  GetMyProfile(){

    const AccessToken = localStorage.getItem("AccessToken")

    const headers = new HttpHeaders({
      Authorization: `Bearer ${AccessToken}`, 
    });

    return this.http.get<User>('https://dummyjson.com/auth/me',{ headers })
  }

}
