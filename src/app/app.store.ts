import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

// Reducers
import { counterReducer } from './counter/counter.reducer';

export interface AppState {
  counter: number;
}

export const store: any[] = [

  /**
   * StoreModule.provideStore is imported once in the root module, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   */
  StoreModule.provideStore(
    {
      counter: counterReducer
    }, {
      counter: 55
    }
  ),

  /**
   * Store devtools instrument the store retaining past versions of state
   * and recalculating new states. This enables powerful time-travel
   * debugging.
   * 
   * To use the debugger, install the Redux Devtools extension for either
   * Chrome or Firefox
   * 
   * See: https://github.com/zalmoxisus/redux-devtools-extension
   */
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
];
