import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Assurez-vous que ce chemin est correct

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));