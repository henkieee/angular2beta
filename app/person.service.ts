import { Injectable } from 'angular2/core';
import { persons } from './person-list';

@Injectable()
export class PersonService{
    getPersons()
    {
        return Promise.resolve(persons);
    }
    getPerson(index:string)
    {
        return Promise.resolve(persons)
            .then(
                persons => persons[index]
            );
    }
}