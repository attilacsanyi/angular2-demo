import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

// Reducers
import {counterReducer} from './counter/counter.reducer';

export interface AppState {
  counter: number;
}

export const store: any[] = [

  // Store
  StoreModule.provideStore(
    {
      counter: counterReducer
    }, {
      counter: 55
    }
  ),

  // Store Devtools
  StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: false,
      position: 'right'
    })
  }),
  StoreLogMonitorModule
];
