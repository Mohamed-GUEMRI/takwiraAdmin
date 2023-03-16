import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from './models/Owner';
import { Player } from './models/Player';
import { Stadium } from './models/Stadium';
import { Reservation } from './models/Reservation';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getOwners():Observable<Owner[]>{
    return this.http.get<Owner[]>('https://localhost:7240/api/Owner/getAllOwners');
  }

  getPlayers():Observable<Player[]>{
    return this.http.get<Player[]>('https://localhost:7240/api/Player/getAllPlayers');
  }

  getReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>('https://localhost:7240/api/Reservation/getAllReservations');
  }

  getStadiums():Observable<Stadium[]>{
    return this.http.get<Stadium[]>('https://localhost:7240/api/Stadium/getAllStadiums');
  }

  getReservationsByPlayerId(id: any):Observable<Reservation[]>{
    return this.http.get<Reservation[]>('https://localhost:7240/api/Reservation/getReservationByOlayerId/'+ id);
  }

  getStadiumsByOwnerId(id: any):Observable<Stadium[]>{
    return this.http.get<Stadium[]>('https://localhost:7240/api/Stadium/getAllStadiumsByOwnerId/'+id);
  }

  activateOwner(id: any, data: any){
    return this.http.put('https://localhost:7240/api/Owner/activateOwner?OwnerId='+ data.id, data);
  }

  desactivateOwner(id: any, data: any){
    return this.http.put('https://localhost:7240/api/Owner/desactivateOwner?OwnerId='+data.id,data);
  }

  activatePlayer(id: any, data: any){
    return this.http.put('https://localhost:7240/api/Player/activatePlayer?PlayerId='+ data.id, data);
  }

  desactivatePlayer(id: any, data: any){
    return this.http.put('https://localhost:7240/api/Player/desactivatePlayer?PlayerId='+data.id,data);
  }

  getPlayerById(id: any){
    return this.http.get('https://localhost:7240/api/Player/getPlayerById/'+id);
  }

  getStadiumById(id: any){
    return this.http.get('https://localhost:7240/api/Stadium/getStadiumById/'+id+'?stadiumId='+id);
  }
}
