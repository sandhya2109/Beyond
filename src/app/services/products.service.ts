import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient){}

getall(){

  return this.http.get("http://localhost:3500/allbooks")
}

additem(pobj:any){

  return this.http.post("http://localhost:3500/book",pobj)

}

}
