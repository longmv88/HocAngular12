import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
  }
//const REST_API = 'http://localhost:3000';
// const REST_API = 'https://randomuser.me/api/?results=';

@Injectable({
  providedIn: 'root',
})
export class HttpservicesService {
  readonly REST_API = 'http://localhost:3000';
  // public httpOptions = {
  //   headers: new HttpHeaders ({
  //     'Content-type': 'application/json'
  //   }),
  // }; 

  constructor(private httpClient: HttpClient) { }
  public getComments(): Observable<any>{
    // const url = '${this.REST_API}/Users';
    return this.httpClient.get<any>(this.REST_API+"/Users");
  }
   public postComments(payload: any): Observable<any>{
     console.log("postComments=",this.REST_API+"/Users" )
     console.log('postComment: payload', payload);
    // const url = '${this.REST_API}/Users';
    return this.httpClient.post<any>(this.REST_API+"/Users", payload);
  }
   public updateComments(payload: any): Observable<any>{
    return this.httpClient.put<any>(this.REST_API+"/Users", payload);
   }
   public deleteComments(payload: any): Observable<any>{
    return this.httpClient.delete<any>(this.REST_API+"/Users", payload);
   }

}
