import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  getUser(id: number) {
	return this.http.get(this.rootURL + '/users/' + id);
  }

  deleteUser(id: number) {
	console.log("Calling deleteUser()");
	return this.http.delete(this.rootURL + '/users/' + id);
  }

  addUser(user: any, id: number) {
	user.id = id;
	return this.http.post(this.rootURL + '/user', user);
  }

}
