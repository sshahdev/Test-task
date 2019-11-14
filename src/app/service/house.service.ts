import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }
  updateHouse(index: string, house: {}){
    console.log(house);
    return this.http.patch('/api/updateHouse',{_id: index, data: house});
  }
  addHouse(house: {}){
    return this.http.post('/api/addHouse', house);
  }

  getHouses(){
    return this.http.get('/api/getHouses');
  }

  getHouse(id: string){
    return this.http.post('/api/getHouse',{_id: id});
  }

  deleteHouse(id: string){
    return this.http.post('/api/deleteHouse',{_id: id});
  }
}
