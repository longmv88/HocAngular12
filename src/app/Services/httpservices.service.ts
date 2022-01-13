import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
  }
const REST_API = 'http://localhost:3000';
// const REST_API = 'https://randomuser.me/api/?results=';

@Injectable({
  providedIn: 'root',
})
export class HttpservicesService {
  // public REST_API = 'http://localhost:3000';
  // public httpOptions = {
  //   headers: new HttpHeaders ({
  //     'Content-type': 'application/json'
  //   }),
  // };

  constructor(private httpClient: HttpClient) { }
  public getComments(users: string): Observable<any>{
    // const url = '${this.REST_API}/Users';
    return this.httpClient.get<any>(REST_API+"/Users");
  }
   public postComments(payload: any): Observable<any>{
     console.log("postComments=",REST_API+"/Users" )
     console.log('postComment: payload', payload);
    // const url = '${this.REST_API}/Users';
    return this.httpClient.post<any>(REST_API+"/Users", payload);
  }
}
