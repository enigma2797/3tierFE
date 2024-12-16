import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';


// export interface Product{
// title:string;
// price:number;
// }

// export interface ProductResponse{
//   products:Product[]
//   }

  @Injectable({
    providedIn: 'root'
  })
  
export class ProductService {

  private apiUrl = 'http://localhost:8080/app/products';  // Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  // Fetch products from the API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
