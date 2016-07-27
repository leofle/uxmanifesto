import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { UxmanifestoAppComponent, environment } from './app/';
import { appRouterProviders } from './app/uxmanifesto.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(UxmanifestoAppComponent,[
  appRouterProviders,
  HTTP_PROVIDERS
]);
