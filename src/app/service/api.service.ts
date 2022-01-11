import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  postStudent(data: any) {
    return this.httpClient.post<any>('http://localhost:3000/posts', data).pipe(map((res: any) => {
         return res;
    }))
  }

     getStudent()
     {
     return this.httpClient.get('http://localhost:3000/posts').pipe(map((res:any)=>{
         return res;
       }))
     }
      
     updateStudent(id: any,data: any)
     {
      return this.httpClient.put('http://localhost:3000/posts/'+id,data).pipe(map((res:any)=>{
         return res;
       }))
     }

     deleteStudent(id: any)
     {
        return this.httpClient.delete('http://localhost:3000/posts/'+id).pipe(map((res:any)=>{
           return res;
         }))
     }
}