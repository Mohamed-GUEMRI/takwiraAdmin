import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit{
  owners:any;
  data = {
    id: 0
  };
  constructor(private apicall: ApiCallService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit():void {
    this.apicall.getOwners().subscribe(response=>{
      this.owners = response;
    });
    
  }
  activateOwner(id:any){
    this.data.id = id;
    this.apicall.activateOwner(id,this.data).subscribe(response=>{
      console.log(response);
      this.apicall.getOwners().subscribe(response=>{
        this.owners = response;
      });
    },
    error =>{
      console.log(error)
    });
  }

  deactivateOwner(id:any){
    this.data.id = id;
    this.apicall.desactivateOwner(id,this.data).subscribe(response=>{
      console.log(response);
      this.apicall.getOwners().subscribe(response=>{
        this.owners = response;
      });
    },
    error =>{
      console.log(error)
    });
  }
}
