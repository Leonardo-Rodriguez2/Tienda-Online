import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../API/API';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API = API_URL;

  constructor(private http:HttpClient){}

  listProducts(): Observable<any>{
    return this.http.get(`${this.API}/products`);
  }

}
