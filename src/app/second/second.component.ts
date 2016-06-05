import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-second',
  templateUrl: 'second.component.html',
  styleUrls: ['second.component.css']
})
export class SecondComponent {
	items = ['Better User Experience', 'Higher Engagement', 'Better Performance', 'Happier Clients'];
}
