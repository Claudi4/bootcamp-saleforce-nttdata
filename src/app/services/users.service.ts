import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    console.log('wwewew');
    
    return this.httpClient.get('https://randomuser.me/api/?results=10&inc=name,gender,location,email,registered,picture');
  }
}
