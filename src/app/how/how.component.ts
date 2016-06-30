import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-how',
  templateUrl: 'how.component.html',
  styleUrls: ['how.component.css']
})
export class HowComponent implements OnInit, OnDestroy {
	hows = ['User\'s oriented platform', 'Simplification', 'Graphic Lenguage', 'Technology', 'Great Team'];

	ngOnInit() {
    console.log("How - initialized");
  }

  	ngOnDestroy() {
    console.log("How - destroyed");
  }
}
