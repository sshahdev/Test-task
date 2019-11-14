import { Component, OnInit, OnDestroy } from '@angular/core';
import { HouseService } from 'src/app/service/house.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-house-data',
  templateUrl: './house-data.component.html',
  styleUrls: ['./house-data.component.css']
})
export class HouseDataComponent implements OnInit, OnDestroy {
  houses:any;
  navigationSubscription: Subscription;
  constructor(private houseService: HouseService, private router: Router) { }

  ngOnInit() {
    this.navigationSubscription= this.router.events.subscribe((e: any)=>{
      if(e instanceof NavigationEnd)
      {
        // alert('test');
        this.ngOnInit();
      }
    });
    this.houseService.getHouses().subscribe((res:[])=>{
      if(res)
      {
        
        this.houses=res;
      }
    });
  }
  ngOnDestroy(){
    this.navigationSubscription.unsubscribe();
  }
  onCancel(house_id){
    this.houseService.deleteHouse(house_id).subscribe((res:any)=>{
      if(res.deletedCount==1){
        this.router.navigate(['/houses']);
      }
    });
  }
  onHouseClick(house_id){
    localStorage.setItem("houseId",house_id);
    this.router.navigate(['/houses',house_id]);
  }

}
