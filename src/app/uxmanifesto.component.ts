import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { ManifestListComponent } from './manifest-list/manifest-list.component';
import { SecondComponent } from './second/second.component';
import { HowComponent } from './how/how.component';

@Component({
  moduleId: module.id,
  selector: 'uxmanifesto-app',
  templateUrl: 'uxmanifesto.component.html',
  styleUrls: ['uxmanifesto.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
@Routes([
{path:'/route1', component: ManifestListComponent },
{path:'/route2', component: SecondComponent},
{path:'/route3', component: HowComponent}
])
export class UxmanifestoAppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/route1']);
  }

  title = 'UXmanifesto';
  subtitle = 'What is Experience for us';

  clicked(event) {
    console.log( `Hi you click the button ${ event.target.innerHTML } , congrats!` );
  }
}
