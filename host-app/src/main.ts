import { setRemoteDefinitions } from '@nrwl/angular/mf';

setRemoteDefinitions({
    remote1: 'http://localhost:4201/remoteEntry.mjs',
    remote2: 'http://localhost:4202/remoteEntry.mjs',
  });

import('./bootstrap').catch((err) => console.error(err));
