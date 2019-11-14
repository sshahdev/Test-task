import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreetComponent } from './street/street.component';
import { HouseComponent } from './house/house.component';
import { StreetStartComponent } from './street/street-start/street-start.component';
import { StreetEditComponent } from './street/street-edit/street-edit.component';
import { HouseEditComponent } from './house/house-edit/house-edit.component';
import { HouseListComponent } from './house/house-list/house-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/street',
    pathMatch: "full",
    runGuardsAndResolvers: 'always'
  },
  {
    path:'street',
    component: StreetComponent,
    children: [
      {
        path: '',
        component: StreetStartComponent
      },
      {
        path: 'new',
        component: StreetEditComponent
      },
      {
        path: ':id',
        component: StreetEditComponent
      }
      
      // {
      //   path: ':id/edit',
      //   component: 
      // }
    ]
  },
  {
    path:'houses',
    component: HouseComponent,
    children: [
      {
        path: '',
        component: HouseListComponent
      },
      {
        path:'new',
        component: HouseEditComponent,
        
      },
      {
        path:':id',
        component: HouseEditComponent,
        
      }
      
      
      // {
      //   path: ':id/edit',
      //   component: 
      // }
    ]
    
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
