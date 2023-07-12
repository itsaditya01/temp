import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SwapService {

  constructor(private http: HttpClient) { 
    
  }
  getProduct(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
}
}
