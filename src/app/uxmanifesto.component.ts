import { Component, OnInit } from '@angular/core';
import { ManifestListComponent } from './manifest-list/manifest-list.component';
import { SecondComponent } from './second/second.component';
import { HowComponent } from './how/how.component';
import {HttpTestComponent} from './http-test/http-test.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  	moduleId: module.id,
	  selector: 'app-root',
  	template: `
    <div class="introWrapper">
      <nav>

      </nav>
      <h1>
        {{title}}
      </h1>
      <h2>
      	{{subtitle}}
      </h2>
      <p>{{paragraph}}</p>

    <div class="navBtns">
      <a [routerLink]="['/route1']" class="btnPrime" (click)="clicked($event)">What</a>
      <a [routerLink]="['/route2']" class="btnPrime" (click)="clicked($event)">Why</a>
      <a [routerLink]="['/route3']" class="btnPrime" (click)="clicked($event)">How</a>
      <a [routerLink]="['/route4']" class="btnPrime" (click)="clicked($event)">Get</a>
    </div>
    <router-outlet></router-outlet>
    </div>
    `,
  	styleUrls: ['uxmanifesto.component.css'],
  	directives: [...ROUTER_DIRECTIVES, HttpTestComponent]
})

export class UxmanifestoAppComponent {
	constructor() { }

  title = 'UXmanifesto';
  subtitle = 'What is Experience for us';
  paragraph = `Experience is the combination of perceptions, emotions, memories, responses and knowledge that result from an interaction, actual or expected, with a product, a system, a service or a brand.It concerns everything that a person feels before (expectation), during(the proper experience) and after (memories) this interaction.
  We are in the Customer Age.Today people want enriched experiences that improve their lives.Customers reward companies whose products exceed their expectations.
  Brands that address this shift by building their business around a brand of listening and working with customers become and stay profitable over time.`

  clicked(event) {
    console.log( `Hi you click the button ${ event.target.innerHTML } , congrats!` );
  }
}
