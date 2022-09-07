import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { PersonComponent } from "../person/person.component";


@Injectable()
export class PersonGuardService implements CanDeactivate<PersonComponent>{

    constructor(){}
    canDeactivate(component:PersonComponent):boolean{
        
        if(component.personForm.dirty)
        {
            return confirm("Are you sure you want to discard the changes?")
        }
        else{
            return true;
        }
    }
}