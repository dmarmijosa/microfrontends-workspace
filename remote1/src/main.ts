import { setRemoteDefinitions } from '@nx/angular/mf';

setRemoteDefinitions({
  remote1: 'http://localhost:4201/remoteEntry.mjs',
});
import('./bootstrap').catch((err) => console.error(err));