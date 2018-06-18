import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  getProducts(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map(
      response => response.json()));
  }
}
