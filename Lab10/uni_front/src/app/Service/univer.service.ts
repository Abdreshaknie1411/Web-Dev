import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Univercity } from '../Modules/Univercity';
import { UnivercityComponent } from '../Components/univercity/univercity.component';
import { Internship } from '../Modules/Internship';

@Injectable({
  providedIn: 'root'
})
export class UniverService {
  snapshot: any;

  constructor(private httpclient:HttpClient) { }

  registerUser(username:string,password:string):Observable<any>{
    return this.httpclient.post('http://localhost:8000/api/register/',{
      username:username,
      password:password,
    })
  }

  login(username:string,password:string):Observable<{ access: string; refresh: string }>{
    return this.httpclient.post<{ access: string; refresh: string }>('http://localhost:8000/api/login/',{
      username,
      password
    })
  }


  getUniverList():Observable<Univercity[]>{
    return this.httpclient.get<Univercity[]>('http://localhost:8000/api/univercities/');
  }

  getInternshipList():Observable<Internship[]>{
    return this.httpclient.get<Internship[]>('http://localhost:8000/api/internship/');
  }
  getIntershipDetail(id:number): Observable<Internship[]>{
    return this.httpclient.get<Internship[]>(`http://localhost:8000/api/univercities/internship/${id}`)
  }
}
