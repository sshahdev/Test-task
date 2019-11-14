import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-street-list',
  templateUrl: './street-list.component.html',
  styleUrls: ['./street-list.component.css']
})
export class StreetListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onAddStreet(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
