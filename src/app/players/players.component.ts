import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit{
  players:any;
  data = {
    id: 0
  };

  constructor(private apicall: ApiCallService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit():void {
    this.apicall.getPlayers().subscribe(response=>{
      this.players = response;
    });
  }

  activatePlayer(id:any){
    this.data.id = id;
    this.apicall.activatePlayer(id,this.data).subscribe(response=>{
      console.log(response);
      this.apicall.getPlayers().subscribe(response=>{
        this.players = response;
      });
    },
    error =>{
      console.log(error)
    });
  }

  deactivatePlayer(id:any){
    this.data.id = id;
    this.apicall.desactivatePlayer(id,this.data).subscribe(response=>{
      console.log(response);
      this.apicall.getPlayers().subscribe(response=>{
        this.players = response;
      });
    },
    error =>{
      console.log(error)
    });
  }
}
