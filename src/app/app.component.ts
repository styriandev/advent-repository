import { Component } from '@angular/core';
import {RxState, selectSlice} from '@rx-angular/state';
import {Recipe, StateRepository} from './state-repository';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface State {
  index: number;
  recipes: Recipe[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ RxState ]
})
export class AppComponent {
  recipeIndex$: Observable<number>;
  recipes$: Observable<Recipe[]>;
  recipe$: Observable<Recipe>;
  hasPrevious$: Observable<boolean>;
  hasNext$: Observable<boolean>;

  constructor(private _state: RxState<State>,
              private stateRepository: StateRepository) {
    this._state.set({ index: 0 });
    this.recipeIndex$ = this._state.select('index');
    this.recipes$ = this._state.select('recipes');
    this.recipe$ = this._state.select(map(({ recipes, index }) => {
      console.log('Computing...');
      return recipes?.[index];
    }));
    this.hasPrevious$ = this.recipeIndex$.pipe(map((idx) => idx > 0));
    this.hasNext$ = this._state.select(
      selectSlice(['index', 'recipes']), // better because than only these parts of the state are returned
      map(({ recipes, index }) => {
        return index + 1 < (recipes?.length ?? 0)
      })
    );


    this._state.connect('recipes', this.stateRepository.recipes);
  }

  next(): void {
    this._state.set('index', ({index}) => index + 1);
  }

  previous(): void {
    this._state.set('index', ({index}) => index - 1);
  }

  copy() {
    this._state.set('recipes', ({recipes}) => {
      const newRecipes = [...recipes, ...recipes];
      recipes.push(...newRecipes);
      return recipes;
      }
    );
  }
}
