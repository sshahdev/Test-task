import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  constructor(private http: HttpClient) { }
  updateStreet(index: string, street: {}){
    return this.http.patch('/api/updateStreet',{_id: index, data: street});
  }
  addStreet(street: {}){
    return this.http.post('/api/addStreet', street);
  }

  getStreets(){
    return this.http.get('/api/getStreets');
  }

  getStreet(id: string){
    return this.http.post('/api/getStreet',{_id: id});
  }

  deleteStreet(id: string){
    return this.http.post('/api/deleteStreet',{_id: id});
  }
}
