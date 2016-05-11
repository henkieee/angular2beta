import {bootstrap} from 'angular2/platform/browser';
import {testComponent} from './app.component';
import { PersonService } from './person.service';

bootstrap(testComponent, [
    PersonService
]);