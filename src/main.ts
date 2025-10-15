// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
// // import { Header } from './app/header';
// // import { Try } from './try/try';

// bootstrapApplication(App, appConfig) //executes App component in the beginning. Runs only when standalone
//   .catch((err) => console.error(err));

//   // bootstrapApplication(Header);
//   // bootstrapApplication(Try)

//   //THIS IS THE FIRST FILE WHICH IS EXECUTED

//when using modules initialise the main.ts like this

import { platformBrowser} from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));