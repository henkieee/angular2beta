import {Component} from 'angular2/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
    selector: 'test',
    templateUrl: './app/app.component.html'
})

export class testComponent
{
    justTesting:number = 0;
    names:string[];
    edit:boolean = false;

    constructor(private personService: PersonService)
    {
        this.justTesting = 5;
        this.names = ['Jan', 'Piet', 'Klaas'];
    }
    activate()
    {
        this.justTesting++;
    }
    saveName(index:string, newValue:string)
    {
        this.personService.getPerson(index)
            .then(person => {
                console.error("person ->", person);
                this.names[index] = newValue;
            });
        this.edit = false;
    }
}