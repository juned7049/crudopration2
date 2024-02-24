import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
 
  private url="http://localhost:8080/user"
  constructor(private httpclient:HttpClient) { }

  //add
  adduser(user:User):Observable<User>{
    return this.httpclient.post<User>(`${this.url}/add`,user);

  }
  //get
  getuser():Observable<User[]>{
    return this.httpclient.get<User[]>(`${this.url}/get`)
  }
  //getbyid
  getuserbyid(id: number): Observable<User> {
    return this.httpclient.get<User>(`${this.url}/get/${id}`); // Use ${id} for dynamic ID
  }
  //update
 updateusers(id:number , user:User):Observable<object>{
  return this.httpclient.put(`${this.url}/update/${id}`,user)

 }
  //delete
 deleteusers(id?:number):Observable<object>{
  return this.httpclient.delete(`${this.url}/delete/${id}`)
 }


}
