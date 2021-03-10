import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44322/api";

  constructor(private http:HttpClient) { }

  getEditList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Editorial');
  }

  addEditorial(val:any){
    return this.http.post(this.APIUrl+'/Editorial',val);
  }

  updateEditorial(val:any){
    return this.http.put(this.APIUrl+'/Editorial',val);
  }

  deleteEditorial(val:any){
    return this.http.delete(this.APIUrl+'/Editorial/'+val);
  }

  getAuthorList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Author');
  }

  addAuthor(val:any){
    return this.http.post(this.APIUrl+'/Author',val);
  }

  updateAuthor(val:any){
    return this.http.put(this.APIUrl+'/Author',val);
  }

  deleteAuthor(val:any){
    return this.http.delete(this.APIUrl+'/Author/'+val);
  }

  getBookList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Book');
  }

  addBook(val:any){
    return this.http.post(this.APIUrl+'/Book',val);
  }

  updateBook(val:any){
    return this.http.put(this.APIUrl+'/Book',val);
  }

  deleteBook(val:any){
    return this.http.delete(this.APIUrl+'/Book/'+val);
  }

  getAllEditorialNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Book/GetAllEditorialNames');
  }
  getAllAuthorNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Book/GetAllAuthorNames');
  }
}
