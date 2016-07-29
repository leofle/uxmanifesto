import { UxmanifestoAppComponent } from './uxmanifesto.component';
import { ManifestListComponent } from './manifest-list/manifest-list.component';
import { SecondComponent } from './second/second.component';
import { HowComponent } from './how/how.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { provideRouter, RouterConfig } from '@angular/router';

const routes: RouterConfig = [
{ path: '', component: ManifestListComponent },
{ path: 'route0', component: ManifestListComponent },
{ path: 'route1', component: SecondComponent},
{ path: 'route2', component: HowComponent},
{ path: 'route3', component: HttpTestComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
