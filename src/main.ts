import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/module/app.module';
import { HeadModule } from './app/core/head.module';

platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(HeadModule);
