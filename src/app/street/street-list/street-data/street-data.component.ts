import { Component, OnInit, OnDestroy } from '@angular/core';
import { StreetService } from 'src/app/service/street.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-street-data',
  templateUrl: './street-data.component.html',
  styleUrls: ['./street-data.component.css']
})
export class StreetDataComponent implements OnInit, OnDestroy {

  navigationSubscription: Subscription;
  constructor(private streetService: StreetService, private router: Router) { 
    this.navigationSubscription= this.router.events.subscribe((e: any)=>{
      if(e instanceof NavigationEnd)
      {
        // alert('test');
        this.ngOnInit();
      }
    });
  }
  streets: any;
  ngOnInit() {
    this.streetService.getStreets().subscribe((res:[])=>{
      if(res)
      {
        this.streets=res;
      }
    });
  }
  ngOnDestroy(){
    this.navigationSubscription.unsubscribe();
  }
  onStreetClick(street_id){
    localStorage.setItem("streetId",street_id);
    this.router.navigate(['/street',street_id]);
  }
  onDeleteStreet(street_id){
    this.streetService.deleteStreet(street_id).subscribe((res:any)=>{
      if(res.deletedCount==1){
        this.router.navigate(['/street']);
      }
    });
  }

}
