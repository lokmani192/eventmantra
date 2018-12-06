import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User,Role } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    register(user: User) {
      user.role = Role.User;
      return this.http.post(`${environment.apiUrl}/users/register`, user);
    }
    //register(username: string, password: string, firstName: string, lastName: string) {
    //  return this.http.post<any>(`${environment.apiUrl}/users/register`, { username, password, firstName, lastName })
    //    .pipe(map(user => {
    //      // login successful if there's a jwt token in the response
    //      if (user && user.token) {
    //        // store user details and jwt token in local storage to keep user logged in between page refreshes
    //        localStorage.setItem('currentUser', JSON.stringify(user));
    //        this.currentUserSubject.next(user);
    //      }

    //      return user;
    //    }));
    //}
    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }
}
