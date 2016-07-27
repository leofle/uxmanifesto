import { UxmanifestoAppComponent } from './uxmanifesto.component';
import { ManifestListComponent } from './manifest-list/manifest-list.component';
import { SecondComponent } from './second/second.component';
import { HowComponent } from './how/how.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { provideRouter, RouterConfig } from '@angular/router';

const routes: RouterConfig = [
{ path: 'route1', component: ManifestListComponent },
{ path: 'route2', component: SecondComponent},
{ path: 'route3', component: HowComponent},
{ path: 'route4', component: HttpTestComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
