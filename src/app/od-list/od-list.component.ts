import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../service/api-call.service';
import { Player } from '../service/models/Player';

@Component({
  selector: 'app-od-list',
  templateUrl: './od-list.component.html',
  styleUrls: ['./od-list.component.css']
})
export class ODListComponent implements OnInit{
  reservations:any;

  constructor(private apicall: ApiCallService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit():void {
    this.apicall.getReservations().subscribe(response=>{
      this.reservations = response;
    });
  }
}
