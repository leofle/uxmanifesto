import { Component } from '@angular/core';
import { ManifestListComponent } from './manifest-list/manifest-list.component';

@Component({
  moduleId: module.id,
  selector: 'uxmanifesto-app',
  templateUrl: 'uxmanifesto.component.html',
  styleUrls: ['uxmanifesto.component.css'],
  directives:[ManifestListComponent]
})
export class UxmanifestoAppComponent {
  title = 'UXmanifesto';
  subtitle = 'What is Experience for us';

  clicked(event) {
    console.log('Hi you click the button, congrats!');
  }
}
