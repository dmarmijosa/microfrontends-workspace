import { loadRemoteModule } from '@nrwl/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'remote1',
    loadChildren: () =>
      loadRemoteModule('remote1', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote2',
    loadChildren: () =>
      loadRemoteModule('remote2', './Routes').then((m) => m.remoteRoutes),
  },
]