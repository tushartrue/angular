import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import { User } from '../tools/models/allmodel';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get('http://api.github.com/users');
}

getUser(login:string){
  return this.http.get('http://api.github.com/users/'+login);
}

}