import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StreetService } from 'src/app/service/street.service';

@Component({
  selector: 'app-street-edit',
  templateUrl: './street-edit.component.html',
  styleUrls: ['./street-edit.component.css']
})
export class StreetEditComponent implements OnInit {
  id: string;
  editMode=false;
  streetForm: FormGroup;
  countries:any= ['India', 'China','U.S','Pakistan'];
  
  constructor(private route: ActivatedRoute, private router: Router, private streetService: StreetService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id=params['id'];
      this.editMode=typeof(params['id']) !== 'undefined';
      this.initForm();
      // console.log(this.editMode);
    });
    
  }

  private initForm(){
    let streetName: string='';
    let streetPostalCode: string='';
    let streetCountry: string='';
    let streetCity: string='';
    
    if(this.editMode){
      this.streetService.getStreet(this.id).subscribe((res: any)=>{
        if(res){
          streetName= res.name;
          streetPostalCode= res.postalCode;
          streetCountry= res.country;
          streetCity= res.city;
          this.streetForm= new FormGroup({
            'name':new FormControl(streetName, Validators.required),
            'postalCode': new FormControl(streetPostalCode, Validators.required),
            'country': new FormControl(streetCountry, Validators.required),
            'city': new FormControl(streetCity, Validators.required),
          });
        }
      });
    }
   
      this.streetForm= new FormGroup({
        'name':new FormControl(streetName, Validators.required),
        'postalCode': new FormControl(streetPostalCode, Validators.required),
        'country': new FormControl(streetCountry, Validators.required),
        'city': new FormControl(streetCity, Validators.required),
      });
  }

  onSubmit(){
    if(this.editMode){
      this.streetService.updateStreet(this.id, this.streetForm.value).subscribe((res:any)=>{
        if(res.nModified){
          alert('Updated successfully');
        }
      },(err:any)=>{
        alert("Something went wrong");
      });
    }
    else{
      this.streetService.addStreet(this.streetForm.value).subscribe((res: any)=>{
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
