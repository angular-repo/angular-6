import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http : HttpClient) { }

  savePropertyService(property){
   return this.http.post('http://localhost:5200/api/property/saveProperty',property)
  }
}
