import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StreetService } from 'src/app/service/street.service';
import { HouseService } from 'src/app/service/house.service';


@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {

  id: string;
  editMode=false;
  houseForm: FormGroup;
  sizes= ['Large', 'Medium', 'Small'];
  streets:any;
  constructor(private router: Router, private route: ActivatedRoute, private streetService: StreetService,
    private elementRef: ElementRef, private houseService: HouseService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id=params['id'];
      this.editMode=typeof(params['id']) !== 'undefined';
      this.initForm();
      // console.log(this.editMode);
    });
    this.streetService.getStreets().subscribe((res:any)=>{
      this.streets= res;
      // for(let street of res){
      //   var option = document.createElement("option");
      //   option.text = street.name;
        
      //   this.elementRef.nativeElement.querySelector("#streetData").add(option);
      // }
      
    });
  }

  private initForm(){
    
    let streetName: string='';
    let name: string='';
    let houseNo: string='';
    let windowWidth: string='';
    let windowHeight: string='';
    let windowSize: string='';
    let doorWidth: string='';
    let doorHeight: string='';
    let doorSize: string='';
    let sideOfHouse: string='';
    
    
    if(this.editMode){
      this.houseService.getHouse(this.id).subscribe((res: any)=>{
        if(res){
          console.log(res);
          streetName= res.street;
          name= res.name;
          houseNo= res.houseNo;
          windowWidth= res.window.windowWidth;
          windowHeight= res.window.windowHeight;
          windowSize= res.window.windowSize;
          doorWidth= res.door.doorWidth;
          doorHeight= res.door.doorHeight;
          doorSize= res.door.doorSize;
          sideOfHouse= res.door.sideOfHouse;
          
          this.houseForm= new FormGroup({
            'streetName':new FormControl(streetName, Validators.required),
            'name': new FormControl(name, Validators.required),
            'houseNo': new FormControl(houseNo, Validators.required),
            'windowWidth': new FormControl(windowWidth, Validators.required),
            'windowHeight': new FormControl(windowHeight, Validators.required),
            'windowSize': new FormControl(windowSize, Validators.required),
            'doorWidth': new FormControl(doorWidth, Validators.required),
            'doorHeight': new FormControl(doorHeight, Validators.required),
            'doorSize': new FormControl(doorSize, Validators.required),
            'sideOfHouse': new FormControl(sideOfHouse, Validators.required)
          });
        }
      });
    }
   
      this.houseForm= new FormGroup({
        'streetName':new FormControl(streetName, Validators.required),
        'name': new FormControl(name, Validators.required),
        'houseNo': new FormControl(houseNo, Validators.required),
        'windowWidth': new FormControl(windowWidth, Validators.required),
        'windowHeight': new FormControl(windowHeight, Validators.required),
        'windowSize': new FormControl(windowSize, Validators.required),
        'doorWidth': new FormControl(doorWidth, Validators.required),
        'doorHeight': new FormControl(doorHeight, Validators.required),
        'doorSize': new FormControl(doorSize, Validators.required),
        'sideOfHouse': new FormControl(sideOfHouse, Validators.required)
      });
  }
  onSubmit(){
    // console.log(this.houseForm.value);
    if(this.editMode){
      // console.log(this.houseForm.value);
      this.houseService.updateHouse(this.id, this.houseForm.value).subscribe((res:any)=>{
        if(res.nModified){
          alert('Updated successfully');
        }
      },(err:any)=>{
        alert("Something went wrong");
      });
    }
    else{
      
      this.houseService.addHouse(this.houseForm.value).subscribe((res: any)=>{
        if(res._id){
          alert("Street inserted successfully");
        }
      },(err: any)=>{
        alert("Something went wrong");
      });
    }
    this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }
}
