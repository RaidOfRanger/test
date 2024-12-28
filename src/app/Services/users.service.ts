import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AllUser {
  id:number
  firstName: string;
  lastName: string;

  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get<AllUser[]>('https://dummyjson.com/users')
  }

}
