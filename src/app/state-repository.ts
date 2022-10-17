import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


export interface Recipe {
  name: string;
  items: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateRepository {
  get recipes(): Observable<Recipe[]> {
    return this._recipes.asObservable();
  }
  private _recipes = new BehaviorSubject<Recipe[]>([]);

  constructor() {
    this.set();
  }

  set(): void {
    this._recipes.next([
      {
        name: 'Schnitzel',
        items: 'Fleisch'
      },
      {
        name: 'Gemüseauflauf',
        items: 'I do not know'
      },
    ])
  }
}
